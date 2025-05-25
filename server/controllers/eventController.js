
import axios from 'axios'
import Event from '../models/eventModel.js'

const fetchEventSection= async (req,res)=>{
    try {
        
        const eventlyRes=await Event.find()
        const tmRes=await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}`)
        console.log(tmRes.data);
        
        if (!tmRes.data._embedded?.events) {
      return res.status(404).json({ message: "No events found from Ticketmaster." });
    }
        const tmEvents=(tmRes.data._embedded?.events||[]).map((e)=>(
            {
            id:`tm-${e.id}`,
            name:e.name,
            image:e.images?.[0]?.url,
            date:e.dates?.start.dateTime
        }
        ))
        const eventlyEvents=eventlyRes.map((e)=>({
            id:e._id,
            name:e.name,
            image:e.image,
            date:e.date
        }))

        const allEvents=[...tmEvents,...eventlyEvents]
        return res.status(200).json(allEvents)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        
    }
}

const fetch=async(req,res)=>{

}

export {fetchEventSection,fetch}