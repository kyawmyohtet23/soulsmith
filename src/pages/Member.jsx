import React from 'react'
import { useParams } from 'react-router-dom'
import Member1 from '../components/Member1';
import NotFound from './NotFound';
import Member2 from '../components/Member2';
import Member3 from '../components/Member3';
import Member4 from '../components/Member4';
import Member5 from '../components/Member5';
import Member6 from '../components/Member6';
import Member7 from '../components/Member7';

const Member = () => {

    const params = useParams();


  return (
        <div>

        {
            params.id == 'member1' ? <Member1 /> : ''
        }
        {
          params.id == 'member2' ? <Member2 /> : ''
        }
        {
          params.id == 'member3' ? <Member3 /> : ''
        }
        {
          params.id == 'member4' ? <Member4 /> : ''
        }
        {
          params.id == 'member5' ? <Member5 /> : ''
        }
                {
          params.id == 'member6' ? <Member6 /> : ''
        }
                        {
          params.id == 'member7' ? <Member7 /> : ''
        }
    </div>
  )
}

export default Member