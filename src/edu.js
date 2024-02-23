import { Timeline } from 'antd'
import XD from './xdlogo.svg'

export const Edu = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      <Timeline
        style={{
          paddingTop: '10px',
          backgroundColor: 'rgba(255,182,193,0.09)',
          backgroundClip: 'padding-box',
        }}
        mode={'alternate'}
        items={[
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2022-09 ~ 2023-12</p>
              </>
            ),
            children: (
              <>
                <div style={{ display: 'flex' }}>
                  <img
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/0/02/Northeastern_Wordmark.svg'
                    }
                    alt={''}
                    width={'130px'}
                    draggable={'false'}
                  ></img>
                  <p>&#128205; Boston, MA</p>
                </div>
                <p>
                  <b>Master</b> of Science in Computer Engineering
                </p>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2019-08 ~ 2020-06</p>
              </>
            ),
            children: (
              <>
                <div style={{ display: 'flex' }}>
                  <img
                    style={{ marginLeft: 'auto' }}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/a/aa/UC_Riverside_logo.svg'
                    }
                    alt={''}
                    width={'130px'}
                    draggable={'false'}
                  ></img>
                  <p>&#128205; Riverside, CA</p>
                </div>
                <p>
                  Graduate Preparation Program in <b>Computer Science</b>
                </p>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2016-08 ~ 2019-06</p>
              </>
            ),
            children: (
              <>
                <div style={{ display: 'flex' }}>
                  <img
                    src={XD}
                    alt={''}
                    width={'100px'}
                    draggable={'false'}
                  ></img>
                  <p>&#128205; Xi'an, China</p>
                </div>
                <p>
                  <b>Bachelor</b> of Science in Computer Science
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  )
}
