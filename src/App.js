import { useEffect, useState } from 'react';

const medium = require('@giuseppecampanelli/medium-api')

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    medium.profile.getRecentPosts('feyyazcavlak').then(res => {
      setPosts(res)
    })
  }, []) // Example Acoount: sergiointoronto

  const trueDate = (param) => {
    const date = new Date(param)
    const day = date.getDay()
    const year = date.getFullYear()
    let month;
    switch (date.getMonth()) {
      default:
        month = "Jan."
      break;
      case 1:
        month = "Feb."
      break;
      case 2:
        month = "Mar."
      break;
      case 3:
        month = "Apr."
      break;
      case 4:
        month = "May"
      break;
      case 5:
        month = "Jun."
      break;
      case 6:
        month = "Jul."
      break;
      case 7:
        month = "Aug."
      break;
      case 8:
        month = "Sep."
      break;
      case 9:
        month = "Oct."
      break;
      case 10:
        month = "Nov."
      break;
      case 11:
        month = "Dec."
      break;
    }
    return `${month} ${day}, ${year}`
  }

  const getPosts = () => {
    const records = posts.slice(0,5)
    if (records.length <= 0) {
      return (
        <li className='text-sm text-red-400'>There are no writing in medium! Maybe you can find next time :)</li>
      )
    }
    return (
      records.map((record) => {
        return <li key={record.guid} className=''><span className='text-xs text-gray-500 font-light mx-4'>{trueDate(record.pubDate)}</span><a href={record.link} target="_blank">{record.title}</a></li>
      })
    )
  }

  return (
    <div className="App">
      <div className="flex flex-col justify-center">
        <div className="title flex flex-col w-full">
          <h1 className="text-center my-[35px]"><a href="https://feyyum.com" className="text-[18px]  tracking-widest text-black hover:text-gray-700">FEYYAZ N. CAVLAK</a></h1>
        </div>
        <div className='flex mx-[30px] sm:justify-center'>
          <div className='flex flex-col max-w-4xl'>
            <div className="flex flex-col">
              <p className="leading-[26px] sm:w-3/5">
                Hi there! I am studying Environmental 
                Engineering at Istanbul Technical University. 
                Front-end development is something I enjoy. 
                I develop in HTML, CSS, JavaScript and Python languages. 
                C# will join them soon. The React library and any technology 
                it's linked to is my favourite! The current route is 
                blockchain development. 😋
              </p>
              <p className="leading-[26px] mt-6">Email Me: <a href="mailto:feyyaz@feyyum.com" target="_blank" className="leading-[26px]">feyyaz@feyyum.com</a></p>
              <ul className="py-6 leading-[26px] flex gap-3 border-b border-gray-200">
                <li><a href="/" target="_blank">Resume</a></li>
                <li><a href="https://github.com/feyyum" target="_blank">Github</a></li>
                <li><a href="https://medium.com/@feyyazcavlak" target="_blank">Medium</a></li>
                <li><a href="https://linkedin.com/in/feyyaz-numan-cavlak" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/feyyum0.js/" target="_blank">Instagram</a></li>
              </ul>
            </div>
            <div className='mt-6 leading-[26px]'>
              <h1 className='text-2xl'>My Writing</h1>
              <p className='mt-2 text-sm text-gray-900 font-light'>You can read my writing from here. Have fun!</p>
            </div>
            <div className='py-2 mb-6'>
              <ul className='flex flex-col gap-1 pt-1'>
                {
                  getPosts()
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
