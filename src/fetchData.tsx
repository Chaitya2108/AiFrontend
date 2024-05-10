import { Avatar } from "antd"
export const fetchData = async () => {
    try {
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch('https://random-data-api.com/api/v2/users?size=10')
        if (!response.ok) {
          console.log('could not fetch data')
          throw new Error('could not fetch data')
        }
        const data = await response.json()
        const formattedData = data.map((item:any) => ({
            key: item.id,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            // avatar: <img src={item.avatar} style={{maxHeight:"100px"}}/>
            avatar: <Avatar src={item.avatar} size='large'/>
          }))
        return formattedData
      }
      catch (error) {
        console.error('error found')
        return;
      }
}