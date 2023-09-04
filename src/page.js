import React from 'react';
import {Avatar, Button, Timeline, Divider} from 'antd';
import avatar from './avatar.jpg'
import EA from './ealogo.svg'
import EAArch from './eaarch.svg'
import TArch from './tencentarch.svg'
import XD from './xdlogo.svg'
import Flink from './flink.svg'
import {GithubOutlined, LinkedinOutlined, FilePdfOutlined} from "@ant-design/icons";

export const Page = () => {
  let style = {
    fontFamily: 'Times New Roman',
    fontSize: '18px'
  }
  if (window.innerWidth > 1000) {
    style.paddingRight = '300px'
  }

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
                href={"/#/cv"}
                size={"large"}
                icon={<FilePdfOutlined style={{fontSize: '30px'}}/>}/>
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
        &#128075; Hi, I am Yaming, a Software Engineer &#x1F468;&#x200D;&#x1F4BB; &#128293;
      </h1>
      <Divider style={{border: '1px solid'}}/>
      <h2 style={{textAlign: "center", paddingTop: '10px'}}>
        Professional Experiences
      </h2>
      <Timeline
        style={{
          paddingTop: '20px',
          backgroundColor: 'rgba(255,182,193,0.07)',
          backgroundClip: 'padding-box'
        }}
        mode={'left'}
        items={[
          {
            label: (
              <>
                <p style={{marginTop: '0px'}}><b>2023-05 ~ 2023-08</b></p>
                <img src={EAArch} alt={""} width={'80%'} draggable={"false"}></img>
              </>
            ),
            children: (
              <>
                <img src={EA} alt={""} width={'200px'} draggable={"false"}/>
                <h3>Full Stack SWE &#128205; Redwood City, CA</h3>
                <ul style={style}>
                  <li>Designed the <b>Java-based OOP</b> model for Player Lifecycle Graph, a serialization model to
                    manage players' states and unified messages, resulting in a <b>30% cost reduction</b> by eliminating
                    the need for customizing <b>Braze</b>.
                  </li>
                  <li>Developed a <b>Flink</b> topology for <b>Kafka</b> streaming PIN events execution, enabling
                    efficient retrieval of lifecycles from <b>Redis</b>, reading player profiles from <b>ScyllaDB</b>,
                    and executing the corresponding lifecycles.
                  </li>
                  <li>Leveraged EADP's <b>Data Query Language (DQL)</b> to extract data from
                    unstructured <b>JSON</b> events, evaluate boolean conditions, and execute action scripts.
                  </li>
                  <li>Built a web application with <b>React</b> and implemented APIs with <b>Spring Boot</b>, empowering
                    campaign managers to draw lifecycle flowcharts and retrieve players' current states in games.
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
                <ul style={style}>
                  <li>Built Tencent News Risk Management Platform
                    using <b>tRPC</b> with <b>Redis</b>, <b>Elasticsearch</b>, etc.
                  </li>
                  <li>Analyzed Tencent News App traffic data using <b>Spark</b>, <b>Hive</b> and <b>Presto</b> to do the
                    OLAP for the team.
                  </li>
                </ul>
                <h4>Tencent Healthcare @ CSIG</h4>
                <ul style={style}>
                  <li>Developed <b>Microservices</b> on <b>Go</b> using <b>gRPC</b> with logs on <b>ELK</b>, monitoring
                    system on <b>Prometheus</b>, <b>Grafana</b>, asynchronous pipelines to <b>Kafka</b>, etc, achieving
                    a <b>25%
                      improvement</b> in interface response time and a <b>50% reduction</b> in production debug time.
                  </li>
                  <li>Established automated <b>CI/CD</b> pipelines that enhanced service security by seamlessly
                    integrating <b>Unit Tests</b> during CI, while also enabling efficient rollback on <b>Tencent Cloud
                      Kubernetes</b>.
                  </li>
                </ul>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{marginTop: '0px'}}><b>2019-08 ~ 2020-07</b></p>
                <a href='https://bitbucket.org/bdlabucr/beast'>
                  <img
                    src='https://bitbucket.org/bdlabucr/beast/raw/a99be5ec3d9e917bcd36e87da1b42d3eae029368/doc/images/beast-logo.svg'
                    alt={""} width={'65%'} draggable={"false"}>
                  </img>
                </a>
              </>
            ),
            children: (
              <>
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/a/aa/UC_Riverside_logo.svg'}
                  alt={""} width={'200px'} draggable={"false"}/>
                <h3>Research Assistant & Scala Developer &#128205; Riverside, CA</h3>
                <ul style={style}>
                  <li>Leveraged the power of <b>Scala</b> and <b>Spark</b> to design user-defined functions for geometry
                    calculation, enabling the provision of diverse and flexible APIs that empower developers to generate
                    and manipulate geometries with ease.
                  </li>
                  <li>Utilized the <b>Hadoop</b> file API to efficiently parse records from the <b>OpenStreetMap</b> PBF
                    file, enabling extraction of OSM entities for subsequent <b>Big Data Processing Pipelines</b>.
                  </li>
                  <li>Extracted nodes, POIs, roads and all objects in pipelines and categorized different datasets from
                    all objects based on OSM tags, including parks, lakes and buildings, etc.
                  </li>
                  <li>Generated the satellite image of corresponding OSM Vector data using <b>Beast
                    Raptor</b> spatial-join for spatial machine learning and AI activities.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
      <h2 style={{textAlign: "center", paddingTop: '20px'}}>
        Tech Stack
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", backgroundColor: 'rgba(255,182,193,0.09)'
      }}>
        <img
          draggable={false}
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
          alt={""}/>
        <img
          style={{marginLeft: '15px', backgroundColor: '#40cace'}}
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
      <h2 style={{textAlign: "center", paddingTop: '30px'}}>
        Education
      </h2>
      <Timeline
        style={{
          paddingTop: '10px',
          backgroundColor: 'rgba(255,182,193,0.09)',
          backgroundClip: 'padding-box'
        }}
        mode={'alternate'}
        items={
          [
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}>2022-09 ~ 2023-12</p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/0/02/Northeastern_Wordmark.svg'}
                         alt={""}
                         width={'130px'} draggable={"false"}></img>
                    <p>&#128205; Boston, MA</p>
                  </div>
                  <p><b>Master</b> of Science in Computer Engineering</p>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}>2019-08 ~ 2020-06</p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img style={{marginLeft: "auto"}}
                         src={'https://upload.wikimedia.org/wikipedia/commons/a/aa/UC_Riverside_logo.svg'} alt={""}
                         width={'130px'} draggable={"false"}></img>
                    <p>&#128205; Riverside, CA</p>
                  </div>
                  <p>Graduate Preparation Program in <b>Computer Science</b></p>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}>2016-08 ~ 2019-06</p>
                </>
              ),
              children: (
                <>
                  <div style={{display: "flex"}}>
                    <img src={XD} alt={""} width={'100px'} draggable={"false"}></img>
                    <p>&#128205; Xi'an, China</p>
                  </div>
                  <p><b>Bachelor</b> of Science in Computer Science</p>
                </>
              )
            },
          ]
        }
      />
      <h2 style={{textAlign: "center", paddingTop: '30px'}}>
        Publication
      </h2>
      <Timeline
        style={{
          paddingTop: '10px',
          backgroundColor: 'rgba(255,182,193,0.07)',
          backgroundClip: 'padding-box'
        }}
        mode={'alternate'}
        items={
          [
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}>2022-11</p>
                </>
              ),
              children: (
                <>
                  <a style={{display: "block", width: '450px', color: "black", textDecoration: "underline"}}
                     href={"https://dl.acm.org/doi/abs/10.1145/3557915.3560954"}><b>OSMX:
                    Spark-based Geospatial Data Extractor from OpenStreetMap and Satellite Images</b>: International
                    Conference on Advances in Geographic Information Systems</a>
                </>
              )
            },
            {
              label: (
                <>
                  <p style={{marginTop: '0px'}}>2021-10</p>
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
                  <p style={{marginTop: '0px'}}>2020-06</p>
                </>
              ),
              children: (
                <>
                  <a style={{display: "block", width: '450px', color: "black", textDecoration: "underline"}}
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
