import React from 'react';
import {Avatar, Button, Timeline, Image} from 'antd';
import {createRoot} from "react-dom";
import avatar from './avatar.jpg'
import EA from './ealogo.svg'
import TArch from './tencentarch.svg'
import XD from './xdlogo.svg'
import Flink from './flink.svg'
import {GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

const App = () => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: '30px'}}>
        <Avatar src={avatar}
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
        <Button style={{
          border: "none",
          marginLeft: '20px',
          marginTop: 'auto',
          marginBottom: "auto",
        }}
                href={"https://github.com/yaming-github"}
                size={"large"}
                icon={<GithubOutlined style={{fontSize: '30px'}}/>}/>
      </div>
      <h1 style={{textAlign: "center", marginTop: '30px'}}>
        &#128075; Hi, I am Yaming, a Full Stack SWE &#x1F468;&#x200D;&#x1F4BB; &#128293; &#128293;
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
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/archive/2/22/20220918154151%21Tencent_Logo.svg'}
                  alt={""} width={'200px'} draggable={"false"}/>
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
      <h2 style={{textAlign: "center", marginTop: '40px', marginBottom: '30px'}}>
        Tech Stack
      </h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        <img
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
          alt={""}/>
        <img
          style={{marginLeft: '15px', backgroundColor: '#00ADD8'}}
          draggable={false}
          width={80}
          src="https://raw.githubusercontent.com/grpc/grpc.io/4ad607130312760348fad636eec1bcd244f353d0/assets/icons/logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '15px'}}
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/OpenJDK_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={80}
          height={60}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={45}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={90}
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={100}
          src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-horizontal-blue.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={60}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg"
          alt={""}/>
        <div style={{width: '100%'}}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={110}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka_wordtype.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/RabbitMQ_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={70}
          src={Flink}
          alt={""}/>
        <img
          style={{marginLeft: '5px'}}
          draggable={false}
          width={120}
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={40}
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={40}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={110}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Superset_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={70}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px'}}
          draggable={false}
          width={40}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg"
          alt={""}/>
        <img
          style={{marginLeft: '10px', marginTop: '-10px'}}
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/Trino-logo-w-bk.svg"
          alt={""}/>
      </div>
      <h2 style={{textAlign: "center", marginTop: '30px', marginBottom: '50px'}}>
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
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/0/02/Northeastern_Wordmark.svg'} alt={""}
                         width={'130px'} draggable={"false"}></img>
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
                    <img style={{marginLeft: "auto"}}
                         src={'https://upload.wikimedia.org/wikipedia/commons/a/aa/UC_Riverside_logo.svg'} alt={""}
                         width={'130px'} draggable={"false"}></img>
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
