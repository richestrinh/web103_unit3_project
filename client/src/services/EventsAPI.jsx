import { useParams } from "react-router-dom";

const EventsAPI = () => {
    const { id } = useParams();
    const getAllEvents = async () => {
        const response = await fetch('/events')
        const data = await response.json();
        return data;
    }

    const getEventById = async (id) => {
        const response = await fetch('/events/' + id);
        const data = await response.json();
        return data;
    }

    return {
        getAllEvents,
        getEventById
    };
}

export default EventsAPI;