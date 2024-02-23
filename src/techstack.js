export const Stack = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Tech Stack</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,182,193,0.09)',
        }}
      >
        <img
          draggable={false}
          width={70}
          src='https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '15px', backgroundColor: '#40cace' }}
          draggable={false}
          width={70}
          src='https://raw.githubusercontent.com/grpc/grpc.io/4ad607130312760348fad636eec1bcd244f353d0/assets/icons/logo.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '15px' }}
          draggable={false}
          width={100}
          src='https://www.python.org/static/community_logos/python-logo-generic.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '5px' }}
          draggable={false}
          width={60}
          height={40}
          src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '10px' }}
          draggable={false}
          width={120}
          src='https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg'
          alt={''}
        />
        <div style={{ width: '100%' }} />
        <img
          draggable={false}
          width={80}
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka_wordtype.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '10px', marginTop: '-10px' }}
          draggable={false}
          width={70}
          src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '10px', marginTop: '-10px' }}
          draggable={false}
          width={80}
          src='https://upload.wikimedia.org/wikipedia/commons/5/57/Trino-logo-w-bk.svg'
          alt={''}
        />
        <img
          style={{ marginLeft: '10px' }}
          draggable={false}
          width={110}
          src='https://upload.wikimedia.org/wikipedia/commons/0/0e/Superset_logo.svg'
          alt={''}
        />
      </div>
    </>
  )
}
