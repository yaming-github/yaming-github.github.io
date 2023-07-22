import React from 'react';
import {Avatar, Button, Timeline} from 'antd';
import {createRoot} from "react-dom";
import image from './avatar.jpg'
import EA from './ealogo.svg'
import TX from './Tencent_Logo.svg'
import TArch from './tencentarch.svg'
import NEU from './neulogo.svg'
import UCR from './ucrlogo.svg'
import XD from './xdlogo.svg'
import {LinkedinOutlined} from "@ant-design/icons";

const App = () => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: '30px'}}>
        <Avatar src={image}
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                draggable={"false"}/>
        <Button style={{
          border: "none",
          marginLeft: '20px',
          marginTop: 'auto',
          marginBottom: "auto",
        }}
                href={"https://www.linkedin.com/in/yz726/"}
                size={"large"}
                icon={<LinkedinOutlined style={{fontSize: '32px'}}/>}/>
      </div>
      <h1 style={{textAlign: "center", marginTop: '30px'}}>
        &#128075; Hello, I am Yaming, a Full Stack SWE &#x1F468;&#x200D;&#x1F4BB; &#128293; &#128293;
      </h1>
      <h2 style={{textAlign: "center", marginTop: '30px', marginBottom: '50px'}}>
        Professional Experiences
      </h2>
      <Timeline
        style={{}}
        mode={'left'}
        items={[
          {
            label: (
              <>
                <p style={{marginTop: '0px'}}><b>2023-05 ~ Present</b></p>
                {/*<img src={EAArch} alt={""} width={'75%'} draggable={"false"}></img>*/}
              </>
            ),
            children: (
              <>
                <img src={EA} alt={""} width={'200px'} draggable={"false"}/>
                <h3>Full Stack SWE &#128205; Redwood City, CA</h3>
                <ul style={{width: '500px'}}>
                  <li>Designed and implemented the Player Lifecycle Graph, a serialization model to manage players'
                    states and unified messages in popular games such as FIFA and APEX.
                  </li>
                  <li>Developed an <b>Apache Flink</b> topology for <b>Apache Kafka</b> streaming trigger events
                    execution, enabling efficient retrieval of lifecycles from <b>Redis</b>, reading player profiles
                    from <b>ScyllaDB</b>, and executing the corresponding lifecycles.
                  </li>
                  <li>Utilized EADP's Data Query Language (DQL) to extract data from unstructured JSON events, evaluate
                    boolean conditions, and execute action scripts.
                  </li>
                  <li>Built an UI with <b>React</b> and implemented APIs with <b>SpringBoot</b>, empowering campaign
                    managers to draw lifecycle flowcharts and retrieve players' current states in games.
                  </li>
                </ul>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{marginTop: '0px'}}><b>2020-07 ~ 2022-08</b></p>
                <img src={TArch} alt={""} width={'65%'} draggable={"false"}></img>
              </>
            ),
            children: (
              <>
                <img src={TX} alt={""} width={'200px'} draggable={"false"}/>
                <h3>Backend SWE &#128205; Beijing, China</h3>
                <h4>Tencent News @ PCG</h4>
                <ul style={{width: '500px'}}>
                  <li>Built Tencent News Risk Management Platform
                    using <b>tRPC</b> with <b>Redis</b>, <b>Elasticsearch</b>, etc.
                  </li>
                  <li>Analyzed Tencent News App traffic data using <b>Apache Spark</b>, <b>Apache
                    Hive</b> and <b>Presto</b> to do the OLAP for the team.
                  </li>
                </ul>
                <h4>Tencent Healthcare @ CSIG</h4>
                <ul style={{width: '500px'}}>
                  <li>Developed Tencent Healthcare back-end micro services using <b>gRPC</b> with high-tolerance APIs,
                    shipper for logs (<b>ELK</b>), monitoring system (<b>Prometheus</b>, <b>Grafana</b>), asynchronous
                    channels to <b>Apache Kafka</b>, etc to enhance reliability of Tencent Healthcare.
                  </li>
                  <li>Deployed micro services on Tencent Public Cloud via Docker containers
                    and <b>Kubernetes</b> automated CI/CD construction to improve service scalability.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
      <h2 style={{textAlign: "center", marginTop: '80px', marginBottom: '50px'}}>
        Education
      </h2>
      <Timeline
        style={{}}
        mode={'alternate'}
        items={
          [
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2022-09 ~ 2023-12</b></p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img src={NEU} alt={""} width={'130px'} draggable={"false"}></img>
                    <h3>&#128205; Boston, MA</h3>
                  </div>
                  <h3>Master of Science in Computer Engineering</h3>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2019-08 ~ 2020-06</b></p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img style={{marginLeft: "auto"}} src={UCR} alt={""} width={'130px'} draggable={"false"}></img>
                    <h3>&#128205; Riverside, CA</h3>
                  </div>
                  <h3>Graduate Preparation Program in Computer Science</h3>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2016-08 ~ 2019-06</b></p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img src={XD} alt={""} width={'100px'} draggable={"false"}></img>
                    <h3>&#128205; Xi'an, China</h3>
                  </div>
                  <h3>Bachelor of Science in Computer Science</h3>
                </>
              )
            },
          ]
        }
      />
      <h2 style={{textAlign: "center", marginBottom: '50px'}}>
        Publication
      </h2>
      <Timeline
        style={{}}
        mode={'alternate'}
        items={
          [
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2022-11</b></p>
                </>
              ),
              children: (
                <>
                  <a style={{display: "block", width: '500px', color: "black", textDecoration: "underline"}}
                     href={"https://dl.acm.org/doi/abs/10.1145/3557915.3560954"}><b>OSMX:
                    Spark-based Geospatial Data Extractor from OpenStreetMap and Satellite Images</b>: International
                    Conference on Advances in Geographic Information Systems</a>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2021-10</b></p>
                </>
              ),
              children: (
                <>
                  <a style={{
                    // TODO align here is not perfect
                    marginLeft: '20pc',
                    color: "black",
                    textDecoration: "underline",
                  }}
                     href={"https://dl.acm.org/doi/abs/10.1145/3459637.3481897"}><b>Beast: Scalable Exploratory
                    Analytics on Spatio-temporal Data</b>: ACM International Conference on Information and Knowledge
                    Management</a>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}><b>2020-06</b></p>
                </>
              ),
              children: (
                <>
                  <a style={{display: "block", width: '500px', color: "black", textDecoration: "underline"}}
                     href={"https://dl.acm.org/doi/10.1145/3403896.3403969"}><b>Evaluating Computational Geometry
                    Libraries for Big Spatial Data Exploration</b>: International ACM SIGMOD Workshop on Managing and
                    Mining Enriched Geo-Spatial Data</a>
                </>
              )
            },
          ]
        }
      />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App/>);
