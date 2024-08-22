import eventData from "../../events.json";

// Define the interface for the props
interface EventCardProps {
  title: string;
  image_URL: string;
  description: string;
  setCurrEvent: (description: string) => void; // Add setCurrEvent to props
}

//   event car should update state variable onclick
const EventCard = ({
  title,
  image_URL,
  description,
  setCurrEvent,
}: EventCardProps) => {
  return (
    <button
      className="flex flex-col items-center"
      onClick={() => setCurrEvent(description)}
    >
      <div>{title}</div>

      <img src={image_URL} />
    </button>
  );
};

export default EventCard;
