import { Timeline } from 'antd'

export const Pub = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Publication</h2>
      <Timeline
        style={{
          paddingTop: '10px',
          backgroundColor: 'rgba(255,182,193,0.07)',
          backgroundClip: 'padding-box',
        }}
        mode={'alternate'}
        items={[
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2022-11</p>
              </>
            ),
            children: (
              <>
                <a
                  style={{
                    display: 'block',
                    width: '450px',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                  href={'https://dl.acm.org/doi/abs/10.1145/3557915.3560954'}
                >
                  <b>
                    OSMX: Spark-based Geospatial Data Extractor from
                    OpenStreetMap and Satellite Images
                  </b>
                  : International Conference on Advances in Geographic
                  Information Systems
                </a>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2021-10</p>
              </>
            ),
            children: (
              <>
                <a
                  style={{
                    // TODO align here is not perfect
                    marginLeft: '20pc',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                  href={'https://dl.acm.org/doi/abs/10.1145/3459637.3481897'}
                >
                  <b>
                    Beast: Scalable Exploratory Analytics on Spatio-temporal
                    Data
                  </b>
                  : ACM International Conference on Information and Knowledge
                  Management
                </a>
              </>
            ),
          },
          {
            label: (
              <>
                <p style={{ marginTop: '0px' }}>2020-06</p>
              </>
            ),
            children: (
              <>
                <a
                  style={{
                    display: 'block',
                    width: '450px',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                  href={'https://dl.acm.org/doi/10.1145/3403896.3403969'}
                >
                  <b>
                    Evaluating Computational Geometry Libraries for Big Spatial
                    Data Exploration
                  </b>
                  : International ACM SIGMOD Workshop on Managing and Mining
                  Enriched Geo-Spatial Data
                </a>
              </>
            ),
          },
        ]}
      />
    </>
  )
}
