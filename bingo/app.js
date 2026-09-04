import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./config.js";

const ADMIN_USERNAME = "jujube";
const DEVICE_ID_KEY = "simple-bingo-device-id";
const USERNAME_KEY = "simple-bingo-username";
const SUPABASE_MODULE_URL =
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const fallbackQuestions = Array.from({ length: 25 }, (_, cellPosition) => ({
  cell_position: cellPosition,
  prompt: "Story prompt",
  is_submitted: false,
}));

const elements = {
  adminPanel: document.querySelector("#admin-panel"),
  adminPlayerAnswers: document.querySelector("#admin-player-answers"),
  adminPlayerBoard: document.querySelector("#admin-player-board"),
  adminPlayerDetail: document.querySelector("#admin-player-detail"),
  adminPlayerName: document.querySelector("#admin-player-name"),
  adminPlayerSummary: document.querySelector("#admin-player-summary"),
  adminStatus: document.querySelector("#admin-status"),
  adminWinnerBanner: document.querySelector("#admin-winner-banner"),
  adminLogoutButton: document.querySelector("#admin-logout-button"),
  answer: document.querySelector("#answer"),
  answerForm: document.querySelector("#answer-form"),
  answerMessage: document.querySelector("#answer-message"),
  cancelAnswer: document.querySelector("#cancel-answer"),
  cancelTeam: document.querySelector("#cancel-team"),
  claimButton: document.querySelector("#claim-button"),
  closeNotification: document.querySelector("#close-notification"),
  closeRules: document.querySelector("#close-rules"),
  chooseWinYing: document.querySelector("#choose-win-ying"),
  chooseYaming: document.querySelector("#choose-yaming"),
  form: document.querySelector("#player-form"),
  gameCard: document.querySelector("#game-card"),
  gameNotification: document.querySelector("#game-notification"),
  grid: document.querySelector("#bingo-grid"),
  nameEntryDialog: document.querySelector("#name-entry-dialog"),
  notificationMessage: document.querySelector("#notification-message"),
  notificationTitle: document.querySelector("#notification-title"),
  playerGame: document.querySelector("#player-game"),
  playerLogoutButton: document.querySelector("#player-logout-button"),
  playerMessage: document.querySelector("#player-message"),
  progressMessage: document.querySelector("#progress-message"),
  questionDialog: document.querySelector("#question-dialog"),
  questionText: document.querySelector("#question-text"),
  adminRefreshButton: document.querySelector("#admin-refresh-button"),
  publicLeaderboardPanel: document.querySelector("#public-leaderboard-panel"),
  submitAnswer: document.querySelector("#submit-answer"),
  rulesDialog: document.querySelector("#rules-dialog"),
  rulesButton: document.querySelector("#rules-button"),
  storyDedication: document.querySelector("#story-dedication"),
  storyPlayerName: document.querySelector("#story-player-name"),
  teamDialog: document.querySelector("#team-dialog"),
  teamLeaderboard: document.querySelector("#team-leaderboard"),
  teamMessage: document.querySelector("#team-message"),
  username: document.querySelector("#username"),
};

function fitDedication() {
  const dedication = elements.storyDedication;
  dedication.style.fontSize = "";
  let size = Number.parseFloat(getComputedStyle(dedication).fontSize);
  const minimumSize = 18;

  while (dedication.scrollWidth > dedication.clientWidth && size > minimumSize) {
    size -= 1;
    dedication.style.fontSize = `${size}px`;
  }
}

function fitDedicationOnOneLine() {
  const dedication = elements.storyDedication;
  dedication.style.fontSize = "";
  let fontSize = Number.parseFloat(getComputedStyle(dedication).fontSize);

  while (dedication.scrollWidth > dedication.clientWidth && fontSize > 16) {
    fontSize -= 1;
    dedication.style.fontSize = `${fontSize}px`;
  }
}

const state = {
  activeCellPosition: null,
  attemptCounts: new Map(),
  gameOver: false,
  isAdmin: false,
  notificationTimer: null,
  notifiedGameOver: false,
  pollTimer: null,
  questions: fallbackQuestions,
  selectedAdminUsername: null,
  submittedCells: new Set(),
  supabase: null,
  team: null,
  username: localStorage.getItem(USERNAME_KEY) ?? "",
  deviceId: getOrCreateDeviceId(),
};

function createTeamGraphic(team) {
  const graphic = document.createElement("span");
  graphic.className = `team-graphic ${team === "yaming" ? "groom" : "bride"}`;
  graphic.innerHTML = team === "yaming"
    ? `<svg viewBox="0 0 64 64" aria-hidden="true">
        <path class="black-tie" d="m25 7 7 7 7-7 5 10-8 10 7 28-11 7-11-7 7-28-8-10Z" />
        <path class="tie-highlight" d="m32 16 4 4-4 5-4-5Z" />
      </svg>`
    : `<svg viewBox="0 0 64 64" aria-hidden="true">
        <path class="veil" d="M13 57C17 34 21 15 32 11c11 4 15 23 19 46-7-5-13-7-19-7s-12 2-19 7Z" />
        <path class="veil-fold" d="M32 13c-5 14-7 27-7 39M32 13c5 14 7 27 7 39" />
        <path class="veil-crown" d="m23 14 4-8 5 6 5-6 4 8c-6-2-12-2-18 0Z" />
      </svg>`;
  return graphic;
}

function setQuestionText(element, prompt, prefix = "") {
  element.textContent = `${prefix}${String(prompt)}`;
}

function createUuid() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex
    .slice(6, 8)
    .join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
}

function getOrCreateDeviceId() {
  const existingId = localStorage.getItem(DEVICE_ID_KEY);
  if (existingId) return existingId;

  const newId = createUuid();
  localStorage.setItem(DEVICE_ID_KEY, newId);
  return newId;
}

function setMessage(element, text, type = "") {
  element.textContent = text;
  element.className = `message${type ? ` ${type}` : ""}${
    element === elements.progressMessage || element === elements.teamMessage ? " centered" : ""
  }`;
}

function renderBoard() {
  elements.grid.replaceChildren();

  for (const question of state.questions) {
    const cell = document.createElement("button");
    const submitted = state.submittedCells.has(question.cell_position);
    const isFreeSpot = question.cell_position === 12;
    const visuallySubmitted = isFreeSpot ? Boolean(state.team) : submitted;
    const attemptsUsed = state.attemptCounts.get(question.cell_position) ?? 0;

    cell.type = "button";
    cell.className = `bingo-cell${visuallySubmitted ? " submitted" : ""}`;
    if ([0, 4, 7, 13, 18, 21].includes(question.cell_position)) {
      cell.classList.add("sparkle-a");
    }
    if ([2, 9, 15, 23].includes(question.cell_position)) {
      cell.classList.add("sparkle-b");
    }
    cell.disabled = !state.username || !state.supabase;
    cell.setAttribute(
      "aria-label",
      isFreeSpot
        ? state.team
          ? `Free spot, Team ${state.team === "yaming" ? "Yaming" : "Win-Ying"}`
          : "Choose your team for the free spot"
        : `${submitted ? "Change answer for" : "Open"} question ${question.cell_position + 1}`,
    );
    if (isFreeSpot) {
      cell.classList.add("free-spot");
      if (state.team) {
        cell.classList.add("submitted");
        cell.append(createTeamGraphic(state.team));
      } else {
        const preview = document.createElement("span");
        preview.className = "team-choice-preview";
        preview.append(createTeamGraphic("yaming"), createTeamGraphic("win-ying"));
        cell.append(preview);
      }
      cell.addEventListener("click", openTeamDialog);
    } else if (submitted) {
      const ring = document.createElement("span");
      const status = document.createElement("small");
      ring.className = "ring-graphic";
      ring.innerHTML = `
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path class="ring-band" d="M18 39c0 11 6.3 19 14 19s14-8 14-19-6.3-17-14-17-14 6-14 17Z" />
          <path class="ring-shine" d="M23 40c0 7.5 3.8 12.5 9 12.5" />
          <path class="diamond" d="m20 19 6-9h12l6 9-12 14Z" />
          <path class="diamond-line" d="m20 19 12 14 12-14M26 10l6 23 6-23M20 19h24" />
        </svg>`;
      status.className = "cell-status";
      status.textContent = attemptsUsed >= 2 ? "No tries left" : "Tap to edit";
      cell.append(ring, status);
    } else {
      const prompt = document.createElement("span");
      prompt.className = "cell-prompt";
      setQuestionText(prompt, question.prompt);
      cell.append(prompt);
    }
    if (!isFreeSpot) {
      cell.addEventListener("click", () => openQuestion(question));
    }
    elements.grid.append(cell);
  }

  setMessage(elements.progressMessage, "");
}

async function openQuestion(question) {
  const attemptsUsed = state.attemptCounts.get(question.cell_position) ?? 0;
  const noTriesLeft = attemptsUsed >= 2;
  state.activeCellPosition = question.cell_position;
  setQuestionText(elements.questionText, question.prompt);
  elements.answer.value = "";
  elements.answer.disabled = question.is_submitted;
  elements.submitAnswer.disabled = question.is_submitted;
  setMessage(
    elements.answerMessage,
    question.is_submitted
      ? "Loading your saved answer…"
      : "",
  );
  elements.questionDialog.showModal();

  if (question.is_submitted) {
    const openedCell = question.cell_position;
    const { data, error } = await state.supabase.rpc("get_hidden_player_answer", {
      p_cell_position: openedCell,
      p_device_id: state.deviceId,
      p_username: state.username,
    });

    if (state.activeCellPosition !== openedCell) return;
    if (error) {
      setMessage(elements.answerMessage, "Could not load your saved answer.", "error");
      elements.answer.disabled = false;
      elements.submitAnswer.disabled = false;
      elements.answer.focus();
      return;
    }
    elements.answer.value = data ?? "";
    setMessage(
      elements.answerMessage,
      noTriesLeft
        ? "You have used both tries for this square."
        : "You have one try left.",
    );
  }

  elements.answer.disabled = noTriesLeft;
  elements.submitAnswer.disabled = noTriesLeft;
  if (!noTriesLeft) {
    elements.answer.focus();
    if (question.is_submitted) elements.answer.select();
  }
}

function notifyGameOver(isWinner) {
  if (!isWinner || state.notifiedGameOver || state.isAdmin) return;
  state.notifiedGameOver = true;
  elements.notificationTitle.textContent = "Congrats!";
  elements.notificationMessage.textContent = "You got a bingo!";
  elements.gameNotification.hidden = false;
  elements.gameNotification.classList.remove("show");
  window.requestAnimationFrame(() => elements.gameNotification.classList.add("show"));
  window.clearTimeout(state.notificationTimer);
  state.notificationTimer = window.setTimeout(closeGameNotification, 9000);
}

function closeGameNotification() {
  window.clearTimeout(state.notificationTimer);
  elements.gameNotification.classList.remove("show");
  window.setTimeout(() => {
    if (!elements.gameNotification.classList.contains("show")) {
      elements.gameNotification.hidden = true;
    }
  }, 220);
}

async function initializeSupabase() {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    setMessage(
      elements.playerMessage,
      "Local preview mode. Connect Supabase to claim a player name.",
    );
    elements.nameEntryDialog.showModal();
    return;
  }

  try {
    const { createClient } = await import(SUPABASE_MODULE_URL);
    state.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

    if (state.username) {
      await claimUsername(state.username, false);
    } else {
      document.body.className = "participant-mode";
      setMessage(elements.playerMessage, "");
      renderBoard();
      elements.nameEntryDialog.showModal();
      elements.username.focus();
    }
  } catch (error) {
    console.error(error);
    const needsAttemptsMigration =
      error?.code === "PGRST202" || error?.message?.includes("get_hidden_player_attempts");

    if (state.username) {
      setMessage(
        elements.progressMessage,
        needsAttemptsMigration
          ? "Database update needed: run migration 009 in Supabase."
          : "Could not load the game. Please refresh and try again.",
        "error",
      );
    } else {
      setMessage(elements.playerMessage, "Could not connect to Supabase.", "error");
      elements.nameEntryDialog.showModal();
    }
  }
}

async function claimUsername(username, showRules = true) {
  const cleanUsername = username.trim();
  if (!cleanUsername || !state.supabase) return;

  if (cleanUsername.length > 10) {
    setMessage(elements.playerMessage, "Player name must be 10 characters or fewer.", "error");
    elements.nameEntryDialog.showModal();
    elements.username.focus();
    return;
  }

  if (cleanUsername.toLowerCase() === ADMIN_USERNAME) {
    await activateSession(ADMIN_USERNAME, false);
    return;
  }

  elements.claimButton.disabled = true;
  const { data, error } = await state.supabase.rpc("register_player", {
    p_device_id: state.deviceId,
    p_username: cleanUsername,
  });

  if (error) {
    elements.claimButton.disabled = false;
    setMessage(elements.playerMessage, error.message, "error");
    elements.nameEntryDialog.showModal();
    return;
  }

  await activateSession(data[0].username, showRules);
}

function openTeamDialog() {
  if (state.team) return;
  setMessage(elements.teamMessage, "Your free spot counts as a correct cell.");
  elements.teamDialog.showModal();
}

async function chooseTeam(team) {
  elements.chooseYaming.disabled = true;
  elements.chooseWinYing.disabled = true;
  setMessage(elements.teamMessage, "Saving your team…");

  const { data, error } = await state.supabase.rpc("choose_player_team", {
    p_device_id: state.deviceId,
    p_team: team,
    p_username: state.username,
  });

  elements.chooseYaming.disabled = false;
  elements.chooseWinYing.disabled = false;
  if (error) {
    setMessage(elements.teamMessage, "Could not save your team. Apply migration 008.", "error");
    return;
  }

  const result = data[0];
  state.team = result.team;
  state.submittedCells.add(12);
  state.gameOver = result.game_over;
  elements.teamDialog.close();
  renderBoard();
  await loadTeamLeaderboard();
  await checkPlayerGameState();
}

async function activateSession(username, showRules = false) {
  state.username = username;
  state.isAdmin = state.username.toLowerCase() === ADMIN_USERNAME;
  localStorage.setItem(USERNAME_KEY, state.username);
  elements.username.value = state.username;
  if (elements.nameEntryDialog.open) elements.nameEntryDialog.close();
  document.body.className = `${state.isAdmin ? "admin-mode" : "participant-mode"} logged-in`;
  elements.gameCard.hidden = state.isAdmin;
  elements.rulesButton.hidden = state.isAdmin;
  elements.playerLogoutButton.hidden = state.isAdmin || ![
    "yaming",
    "win-ying",
    "winying",
  ].includes(state.username.toLowerCase());
  elements.adminPanel.hidden = !state.isAdmin;
  elements.publicLeaderboardPanel.hidden = state.isAdmin;
  elements.storyPlayerName.textContent = state.username;
  window.requestAnimationFrame(fitDedication);
  requestAnimationFrame(fitDedicationOnOneLine);

  if (state.isAdmin) {
    await loadAdminStatus();
  } else {
    await loadPlayerTeam();
    await Promise.all([loadPlayerBoard(), loadTeamLeaderboard()]);
  }
  if (showRules && !state.isAdmin) elements.rulesDialog.showModal();
  startPolling();
}

async function loadPlayerTeam() {
  const { data, error } = await state.supabase.rpc("get_player_team", {
    p_device_id: state.deviceId,
    p_username: state.username,
  });
  if (!error) state.team = data || null;
}

async function loadPlayerBoard() {
  const [boardResponse, attemptsResponse] = await Promise.all([
    state.supabase.rpc("get_hidden_player_board", {
      p_device_id: state.deviceId,
      p_username: state.username,
    }),
    state.supabase.rpc("get_hidden_player_attempts", {
      p_device_id: state.deviceId,
      p_username: state.username,
    }),
  ]);
  if (boardResponse.error) throw boardResponse.error;
  if (attemptsResponse.error) throw attemptsResponse.error;

  const data = boardResponse.data;
  state.questions = data;
  state.attemptCounts = new Map(
    attemptsResponse.data.map((entry) => [entry.cell_position, entry.attempt_count]),
  );
  state.submittedCells = new Set(
    data.filter((question) => question.is_submitted).map((question) => question.cell_position),
  );
  state.gameOver = data[0]?.game_over ?? false;
  renderBoard();

  if (state.gameOver) await checkPlayerGameState();
}

async function submitAnswer() {
  const answer = elements.answer.value;
  if (!answer.trim() || state.activeCellPosition === null) return;

  const wasSubmitted = state.submittedCells.has(state.activeCellPosition);
  elements.submitAnswer.disabled = true;
  setMessage(elements.answerMessage, "Submitting…");
  const { data, error } = await state.supabase.rpc("submit_hidden_bingo_answer", {
    p_answer: answer,
    p_cell_position: state.activeCellPosition,
    p_device_id: state.deviceId,
    p_username: state.username,
  });
  elements.submitAnswer.disabled = false;

  if (error) {
    setMessage(elements.answerMessage, error.message, "error");
    return;
  }

  const result = data[0];
  state.attemptCounts.set(
    state.activeCellPosition,
    (state.attemptCounts.get(state.activeCellPosition) ?? 0) + 1,
  );
  state.submittedCells = new Set(result.submitted_cells ?? []);
  const submittedQuestion = state.questions.find(
    (question) => question.cell_position === state.activeCellPosition,
  );
  if (submittedQuestion) submittedQuestion.is_submitted = true;
  state.gameOver = result.game_over;
  elements.questionDialog.close();
  renderBoard();

  setMessage(
    elements.progressMessage,
    wasSubmitted
      ? "Second try submitted. Results remain hidden."
      : "First try submitted. You have one try left for this square.",
    "success",
  );
  await checkPlayerGameState();
  await loadTeamLeaderboard();
}

async function checkPlayerGameState() {
  if (!state.supabase || state.isAdmin) return;

  const { data, error } = await state.supabase.rpc("get_hidden_player_game_state", {
    p_device_id: state.deviceId,
    p_username: state.username,
  });
  if (error || !data.length) return;

  const gameState = data[0];
  state.gameOver = gameState.game_over;
  renderBoard();
  notifyGameOver(gameState.is_winner);
}

function renderAdminStatus(entries) {
  const rankedEntries = [...entries].sort((left, right) => {
    const leftPlacement = Number(left.placement) || Number.POSITIVE_INFINITY;
    const rightPlacement = Number(right.placement) || Number.POSITIVE_INFINITY;
    return leftPlacement - rightPlacement ||
      Number(left.minimum_needed) - Number(right.minimum_needed) ||
      Number(right.correct_count) - Number(left.correct_count) ||
      Number(right.submitted_count) - Number(left.submitted_count) ||
      left.username.localeCompare(right.username);
  });
  const finishers = rankedEntries.filter((entry) => Number(entry.placement) > 0);
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  elements.adminWinnerBanner.hidden = !finishers.length;
  if (finishers.length) {
    const heading = document.createElement("strong");
    const list = document.createElement("ol");
    heading.textContent = "Bingo finishers";
    list.className = "finisher-list";
    list.replaceChildren(
      ...finishers.map((entry) => {
        const item = document.createElement("li");
        const marker = document.createElement("span");
        const name = document.createElement("span");
        const placement = Number(entry.placement);
        marker.className = "finisher-marker";
        marker.textContent = medals[placement] ?? `#${placement}`;
        name.textContent = entry.username;
        item.append(marker, name);
        return item;
      }),
    );
    elements.adminWinnerBanner.replaceChildren(heading, list);
  } else {
    elements.adminWinnerBanner.replaceChildren();
  }

  if (!entries.length) {
    elements.adminStatus.innerHTML = '<li class="empty-state">No players yet.</li>';
    elements.adminPlayerDetail.hidden = true;
    state.selectedAdminUsername = null;
    return;
  }

  if (
    state.selectedAdminUsername &&
    !rankedEntries.some((entry) => entry.username === state.selectedAdminUsername)
  ) {
    state.selectedAdminUsername = null;
    elements.adminPlayerDetail.hidden = true;
  }

  elements.adminStatus.replaceChildren(
    ...rankedEntries.map((entry) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      const player = document.createElement("div");
      const name = document.createElement("strong");
      const counts = document.createElement("span");
      const distance = document.createElement("span");

      const placement = Number(entry.placement) || null;
      item.className = placement ? "winner-row" : "";
      button.type = "button";
      button.className = "admin-player-button";
      if (entry.username === state.selectedAdminUsername) button.classList.add("selected");
      player.className = "race-player";
      distance.className = "race-distance";
      name.textContent = placement
        ? `${medals[placement] ?? `#${placement}`} ${entry.username}`
        : entry.username;
      counts.textContent = `${entry.correct_count}/${entry.submitted_count} correct`;
      const placementSuffix = placement && placement % 100 >= 11 && placement % 100 <= 13
        ? "th"
        : placement % 10 === 1
          ? "st"
          : placement % 10 === 2
            ? "nd"
            : placement % 10 === 3
              ? "rd"
              : "th";
      distance.textContent = placement
        ? `${placement}${placementSuffix} place`
        : `${entry.minimum_needed} to bingo`;
      player.append(name, counts);
      button.append(player, distance);
      button.addEventListener("click", async () => {
        state.selectedAdminUsername = entry.username;
        elements.adminStatus
          .querySelectorAll(".admin-player-button")
          .forEach((playerButton) => playerButton.classList.remove("selected"));
        button.classList.add("selected");
        await loadAdminPlayerBoard(entry.username);
      });
      item.append(button);
      return item;
    }),
  );
}

function renderAdminPlayerBoard(rows, username) {
  const attemptedRows = rows.filter(
    (row) => row.is_submitted && Number(row.cell_position) !== 12,
  );
  const correctCount = attemptedRows.filter((row) => row.is_correct).length;
  const team = rows[0]?.player_team;

  elements.adminPlayerName.textContent = username;
  elements.adminPlayerSummary.textContent = `${correctCount} correct · ${attemptedRows.length} submitted${
    team ? ` · Team ${team === "yaming" ? "Yaming" : "Win-Ying"}` : " · No team"
  }`;
  elements.adminPlayerDetail.hidden = false;

  elements.adminPlayerBoard.replaceChildren(
    ...rows.map((row) => {
      const cell = document.createElement("div");
      const position = document.createElement("small");
      const status = document.createElement("strong");
      const isFreeSpot = Number(row.cell_position) === 12;
      const resultClass = !row.is_submitted
        ? "unanswered"
        : row.is_correct
          ? "correct"
          : "incorrect";

      cell.className = `admin-board-cell ${resultClass}${isFreeSpot ? " free" : ""}`;
      position.textContent = String(Number(row.cell_position) + 1);
      status.textContent = !row.is_submitted ? "·" : row.is_correct ? "✓" : "×";
      cell.title = `${row.prompt}${
        row.is_submitted ? ` — ${row.submitted_answer} (${row.is_correct ? "correct" : "incorrect"})` : ""
      }`;
      cell.setAttribute("aria-label", cell.title);
      cell.append(position, status);
      return cell;
    }),
  );

  if (!attemptedRows.length) {
    elements.adminPlayerAnswers.innerHTML =
      '<p class="empty-state">This player has not submitted any answers yet.</p>';
    return;
  }

  elements.adminPlayerAnswers.replaceChildren(
    ...attemptedRows.map((row) => {
      const card = document.createElement("article");
      const heading = document.createElement("div");
      const prompt = document.createElement("strong");
      const result = document.createElement("span");
      const submitted = document.createElement("p");
      const expected = document.createElement("p");
      const attempts = document.createElement("small");

      card.className = `admin-answer-card ${row.is_correct ? "correct" : "incorrect"}`;
      heading.className = "admin-answer-heading";
      setQuestionText(prompt, row.prompt, `${Number(row.cell_position) + 1}. `);
      result.className = "admin-answer-result";
      result.textContent = row.is_correct ? "Correct" : "Incorrect";
      submitted.textContent = `Submitted: ${row.submitted_answer}`;
      expected.textContent = `Expected: ${row.accepted_answer}`;
      attempts.textContent = `${row.attempt_count} ${Number(row.attempt_count) === 1 ? "try" : "tries"} used`;
      heading.append(prompt, result);
      card.append(heading, submitted, expected, attempts);
      return card;
    }),
  );
}

async function loadAdminPlayerBoard(username) {
  const requestedUsername = username;
  elements.adminPlayerDetail.hidden = false;
  elements.adminPlayerName.textContent = requestedUsername;
  elements.adminPlayerSummary.textContent = "Loading…";

  const { data, error } = await state.supabase.rpc("get_hidden_bingo_admin_player_board", {
    p_device_id: state.deviceId,
    p_player_username: requestedUsername,
    p_username: state.username,
  });

  if (state.selectedAdminUsername !== requestedUsername) return;
  if (error) {
    elements.adminPlayerSummary.textContent = "Could not load player details. Apply migration 011.";
    elements.adminPlayerBoard.replaceChildren();
    elements.adminPlayerAnswers.replaceChildren();
    return;
  }

  renderAdminPlayerBoard(data, requestedUsername);
}

function renderTeamLeaderboard(entries) {
  const totals = new Map(
    entries.map((entry) => [
      entry.team,
      entry.correct_count === null ? null : Number(entry.correct_count),
    ]),
  );
  const teams = [
    { key: "yaming", name: "Yaming", role: "Team Groom" },
    { key: "win-ying", name: "Win-Ying", role: "Team Bride" },
  ];
  const scores = teams.map((team) => totals.get(team.key));
  const visibleScores = scores.filter((score) => score !== null && score !== undefined);
  const highestScore = visibleScores.length ? Math.max(...visibleScores) : 0;
  const leadingTeams = teams.filter(
    (team) => totals.get(team.key) === highestScore,
  );
  const leaderKey = highestScore > 0 && leadingTeams.length === 1 ? leadingTeams[0].key : null;

  elements.teamLeaderboard.replaceChildren(
    ...teams.map((team) => {
      const card = document.createElement("article");
      const identity = document.createElement("div");
      const name = document.createElement("strong");
      const role = document.createElement("small");
      const count = document.createElement("span");
      card.className = `team-score-card ${team.key}`;
      identity.className = "team-score-identity";
      name.textContent = team.name;
      if (team.key === leaderKey) {
        const diamond = document.createElement("span");
        diamond.className = "leader-diamond";
        diamond.setAttribute("role", "img");
        diamond.setAttribute("aria-label", "Currently leading");
        diamond.innerHTML = `
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path class="leader-diamond-gem" d="m7 12 4-6h10l4 6-9 13Z" />
            <path class="leader-diamond-cut" d="m7 12 9 13 9-13M11 6l5 19 5-19M7 12h18" />
            <path class="leader-diamond-shine" d="M5 4v5M2.5 6.5h5M26 3v4M24 5h4" />
          </svg>`;
        name.append(diamond);
      }
      role.textContent = team.role;
      count.className = "team-score-count";
      const score = totals.get(team.key);
      if (score === null || score === undefined) {
        count.classList.add("loading");
        count.textContent = "Loading…";
      } else {
        count.innerHTML = `<strong>${score}</strong><small>correct answers</small>`;
      }
      identity.append(name, role);
      card.append(createTeamGraphic(team.key), identity, count);
      return card;
    }),
  );
}

async function loadTeamLeaderboard() {
  if (!state.supabase || state.isAdmin || !state.username) return;

  const { data, error } = await state.supabase.rpc("get_public_team_totals");
  if (error) {
    elements.teamLeaderboard.innerHTML =
      '<p class="empty-state">Could not load team totals. Apply migration 008.</p>';
    return;
  }
  renderTeamLeaderboard(data);
}

async function loadAdminStatus() {
  if (!state.supabase || !state.isAdmin) return;

  elements.adminRefreshButton.disabled = true;
  const { data, error } = await state.supabase.rpc("get_hidden_bingo_admin_players", {
    p_device_id: state.deviceId,
    p_username: state.username,
  });
  elements.adminRefreshButton.disabled = false;

  if (error) {
    elements.adminStatus.innerHTML =
      '<li class="empty-state">Could not load players. Apply migration 011.</li>';
    return;
  }
  renderAdminStatus(data);
  if (state.selectedAdminUsername) {
    await loadAdminPlayerBoard(state.selectedAdminUsername);
  }
}

function logoutCurrentDevice() {
  window.clearInterval(state.pollTimer);
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

function startPolling() {
  if (state.pollTimer) return;
  state.pollTimer = window.setInterval(
    state.isAdmin
      ? loadAdminStatus
      : () => Promise.all([checkPlayerGameState(), loadTeamLeaderboard()]),
    5000,
  );
}

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = elements.username.value.trim();

  if (username.length > 10) {
    setMessage(elements.playerMessage, "Player name must be 10 characters or fewer.", "error");
    elements.username.focus();
    return;
  }

  elements.nameEntryDialog.close();
  await claimUsername(username);
});

elements.answerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await submitAnswer();
});

elements.cancelAnswer.addEventListener("click", () => {
  state.activeCellPosition = null;
  elements.questionDialog.close();
});
elements.closeNotification.addEventListener("click", closeGameNotification);
elements.cancelTeam.addEventListener("click", () => elements.teamDialog.close());
elements.closeRules.addEventListener("click", () => elements.rulesDialog.close());
elements.rulesButton.addEventListener("click", () => elements.rulesDialog.showModal());
elements.chooseYaming.addEventListener("click", () => chooseTeam("yaming"));
elements.chooseWinYing.addEventListener("click", () => chooseTeam("win-ying"));
elements.playerLogoutButton.addEventListener("click", logoutCurrentDevice);
elements.adminLogoutButton.addEventListener("click", logoutCurrentDevice);
elements.adminRefreshButton.addEventListener("click", loadAdminStatus);
elements.nameEntryDialog.addEventListener("cancel", (event) => event.preventDefault());
elements.rulesDialog.addEventListener("cancel", (event) => event.preventDefault());
window.addEventListener("resize", fitDedication);
document.fonts?.ready.then(fitDedication);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible" || !state.username) return;
  if (state.isAdmin) loadAdminStatus();
  else Promise.all([checkPlayerGameState(), loadTeamLeaderboard()]);
});
window.addEventListener("resize", fitDedicationOnOneLine);
document.fonts?.ready.then(fitDedicationOnOneLine);

elements.username.value = state.username;
renderBoard();
initializeSupabase();
