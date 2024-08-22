import eventData from "../../events.json";

// Define the interface for the props
interface EventCardProps {
  title: string;
  image_URL: string;
  description: string;
  setCurrDescrip: (description: string) => void; // Add setCurrEvent to props
}

//   event car should update state variable onclick
const EventCard = ({
  title,
  image_URL,
  description,
  setCurrDescrip,
}: EventCardProps) => {
  return (
    <button
      className="flex flex-col items-center"
      onClick={() => setCurrDescrip(description)}
    >
      <div>{title}</div>

      <img src={image_URL} />
    </button>
  );
};

export default EventCard;
