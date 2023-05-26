import { Button, FormControl, HStack, Input, Select, Spinner } from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import useMeetings from '../hooks/useMeetings';
import { useNavigate } from 'react-router-dom';

const CreateMeetingForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    place: '',
    day: '',
    description: '',
    time: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate('/home', { state: { formData } });
  };

    const handleReset = () => {
      setFormData({
        title: "",
        place: "",
        day: "",
        description: "",
        time: "",
      });
      formRef.current?.reset();
    };

  const { isLoading } = useMeetings();

  return (
    <FormControl className="createMeetingForm" isRequired>
      <form onSubmit={handleSubmit}>
        <Input
          className="createMeetingTitle"
          placeholder="Titel..."
          width="300px"
          bgColor="#05976B"
          color={"white"}
          _placeholder={{ color: "white" }}
          onChange={handleInputChange}
          value={formData.title}
          name="title"
        />
        <Input
          className="createMeetingPlace"
          placeholder="Skriv plats..."
          width="300px"
          bgColor="#05976B"
          color={"white"}
          _placeholder={{ color: "white" }}
          onChange={handleInputChange}
          value={formData.place}
          name="place"
        />
        <Select
          className="createMeetingDay"
          placeholder="Välj Dag..."
          width="300px"
          bg="#05976B"
          color={"white"}
          _placeholder={{ color: "white" }}
          onChange={handleSelectInputChange}
          value={formData.day}
          name="day"
        >
          <option style={{ color: "black" }}>Måndag</option>
          <option style={{ color: "black" }}>Tisdag</option>
          <option style={{ color: "black" }}>Onsdag</option>
          <option style={{ color: "black" }}>Torsdag</option>
          <option style={{ color: "black" }}>Fredag</option>
          <option style={{ color: "black" }}>Lördag</option>
          <option style={{ color: "black" }}>Söndag</option>
        </Select>
        <Input
          className="createMeetingTime"
          placeholder="Skriv tid..."
          width="300px"
          bgColor="#05976B"
          color={"white"}
          _placeholder={{ color: "white" }}
          onChange={handleInputChange}
          value={formData.time}
          name="time"
        />
        <Input
          className="createMeetingDescription"
          placeholder="Beskrivning..."
          width="300px"
          bgColor="#05976B"
          color={"white"}
          _placeholder={{ color: "white" }}
          onChange={handleInputChange}
          value={formData.description}
          name="description"
        />
        <HStack className="formButtons">
          <Button
            colorScheme="red"
            variant="solid"
            size="md"
            type="reset"
            onClick={handleReset}
          >
            Rensa
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            variant={"outline"}
            type="submit"
          >
            {isLoading && <Spinner />}
            Skapa
          </Button>
        </HStack>
      </form>
    </FormControl>
  );
};

export default CreateMeetingForm;



