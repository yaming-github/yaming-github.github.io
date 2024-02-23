import { Avatar, Button } from 'antd'
import avatar from './avatar.jpg'
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
} from '@ant-design/icons'

export const Header = () => {
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Avatar
          src={avatar}
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          draggable={'false'}
        />
        <Button
          style={{
            border: 'none',
            marginLeft: '20px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          href={'/#/cv'}
          size={'large'}
          icon={<FilePdfOutlined style={{ fontSize: '30px' }} />}
        />
        <Button
          style={{
            border: 'none',
            marginLeft: '20px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          href={'https://www.linkedin.com/in/yz726/'}
          size={'large'}
          icon={<LinkedinOutlined style={{ fontSize: '32px' }} />}
        />
        <Button
          style={{
            border: 'none',
            marginLeft: '20px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          href={'https://github.com/yaming-github'}
          size={'large'}
          icon={<GithubOutlined style={{ fontSize: '30px' }} />}
        />
      </div>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
        &#128075; Hi, I am Yaming, a Software Engineer
        &#x1F468;&#x200D;&#x1F4BB; &#128293;
      </h1>
    </>
  )
}
