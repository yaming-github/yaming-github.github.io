import { Timeline } from 'antd'
import EAArch from './eaarch.svg'
import TArch from './tencentarch.svg'

export const Work = () => {
  let style = {
    fontFamily: 'Times New Roman',
    fontSize: '18px',
  }
  if (window.innerWidth > 1000) {
    style.paddingRight = '300px'
  }

  return (
    <>
      <h2 style={{ textAlign: 'center', paddingTop: '10px' }}>
        Professional Experiences
      </h2>
      <Timeline
        style={{
          paddingTop: '20px',
          backgroundColor: 'rgba(255,182,193,0.07)',
          backgroundClip: 'padding-box',
        }}
        mode={'left'}
        items={[
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>
                  <b>2024-01 ~ Present</b>
                </p>
              </>
            ),
            children: (
              <>
                <img
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Moveworks_Logo.svg'
                  }
                  style={{
                    marginLeft: '-20px',
                    marginTop: '-10px',
                  }}
                  alt={''}
                  width={'220px'}
                  draggable={'false'}
                />
                <h3
                  style={{
                    marginTop: '-5px',
                  }}
                >
                  Software Engineer &#128205; Mountain View, CA
                </h3>
                <ul style={style}>
                  <li>Data platform & Data infrastructure</li>
                </ul>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>
                  <b>2023-05 ~ 2023-08</b>
                </p>
                <img
                  src={EAArch}
                  alt={''}
                  width={'80%'}
                  draggable={'false'}
                ></img>
              </>
            ),
            children: (
              <>
                <img
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/8/81/Electronic_Arts_2020.svg'
                  }
                  alt={''}
                  width={'230px'}
                  draggable={'false'}
                />
                <h3>Software Engineer &#128205; Redwood City, CA</h3>
                <ul style={style}>
                  <li>
                    Designed the <b>Java-based OOP</b> model for Player
                    Lifecycle Graph, a serialization model to manage players'
                    states and unified messages, resulting in a{' '}
                    <b>30% cost reduction</b> by eliminating the need for
                    customizing <b>Braze</b>
                  </li>
                  <li>
                    Developed a <b>Flink</b> topology for <b>Kafka</b> streaming
                    PIN events execution, enabling efficient retrieval of
                    lifecycles from <b>Redis</b>, reading player profiles from{' '}
                    <b>ScyllaDB</b>, and executing the corresponding lifecycles
                  </li>
                  <li>
                    Leveraged EADP's <b>Data Query Language (DQL)</b> to extract
                    data from unstructured <b>JSON</b> events, evaluate boolean
                    conditions, and execute action scripts
                  </li>
                  <li>
                    Built a web application with <b>React</b> and implemented
                    APIs with <b>Spring Boot</b>, empowering campaign managers
                    to draw lifecycle flowcharts and retrieve players' current
                    states in games
                  </li>
                </ul>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>
                  <b>2020-07 ~ 2022-08</b>
                </p>
                <img
                  src={TArch}
                  alt={''}
                  width={'65%'}
                  draggable={'false'}
                ></img>
              </>
            ),
            children: (
              <>
                <img
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/archive/2/22/20220918154151%21Tencent_Logo.svg'
                  }
                  alt={''}
                  width={'180px'}
                  draggable={'false'}
                />
                <h3>Software Engineer &#128205; Beijing, China</h3>
                <h4>Tencent News @ PCG</h4>
                <ul style={style}>
                  <li>
                    Built Tencent News Risk Management Platform using{' '}
                    <b>tRPC</b> with <b>Redis</b>, <b>Elasticsearch</b>, etc
                  </li>
                  <li>
                    Analyzed Tencent News App traffic data using <b>Spark</b>,{' '}
                    <b>Hive</b> and <b>Presto</b> to do the OLAP for the team
                  </li>
                </ul>
                <h4>Tencent Healthcare @ CSIG</h4>
                <ul style={style}>
                  <li>
                    Developed <b>Microservices</b> on <b>Go</b> using{' '}
                    <b>gRPC</b> with logs on <b>ELK</b>, monitoring system on{' '}
                    <b>Prometheus</b>, <b>Grafana</b>, asynchronous pipelines to{' '}
                    <b>Kafka</b>, etc, achieving a <b>25% improvement</b> in
                    interface response time and a <b>50% reduction</b> in
                    production debug time
                  </li>
                  <li>
                    Established automated <b>CI/CD</b> pipelines that enhanced
                    service security by seamlessly integrating <b>Unit Tests</b>{' '}
                    during CI, while also enabling efficient rollback on{' '}
                    <b>Tencent Cloud Kubernetes</b>
                  </li>
                </ul>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>
                  <b>2019-08 ~ 2020-07</b>
                </p>
                <a href='https://bitbucket.org/bdlabucr/beast'>
                  <img
                    src='https://bitbucket.org/bdlabucr/beast/raw/a99be5ec3d9e917bcd36e87da1b42d3eae029368/doc/images/beast-logo.svg'
                    alt={''}
                    width={'65%'}
                    draggable={'false'}
                  ></img>
                </a>
              </>
            ),
            children: (
              <>
                <img
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/a/aa/UC_Riverside_logo.svg'
                  }
                  alt={''}
                  width={'180px'}
                  draggable={'false'}
                />
                <h3>
                  Research Assistant & Scala Developer &#128205; Riverside, CA
                </h3>
                <ul style={style}>
                  <li>
                    Leveraged the power of <b>Scala</b> and <b>Spark</b> to
                    design user-defined functions for geometry calculation,
                    enabling the provision of diverse and flexible APIs that
                    empower developers to generate and manipulate geometries
                    with ease
                  </li>
                  <li>
                    Utilized the <b>Hadoop</b> file API to efficiently parse
                    records from the <b>OpenStreetMap</b> PBF file, enabling
                    extraction of OSM entities for subsequent{' '}
                    <b>Big Data Processing Pipelines</b> on <b>AWS EMR</b>
                  </li>
                  <li>
                    Extracted nodes, POIs, roads and all objects in pipelines
                    and categorized different datasets from all objects based on
                    OSM tags, including parks, lakes and buildings, etc
                  </li>
                  <li>
                    Generated the satellite image of corresponding OSM Vector
                    data using <b>Beast Raptor</b> spatial-join for spatial
                    machine learning and AI activities
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
    </>
  )
}
