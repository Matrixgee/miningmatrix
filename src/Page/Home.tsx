import Choose from "./Choose";
import Faq from "./Faq";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonals";
import NotificationModal from "../Component/NotificationModal";
import { useEffect, useState } from "react";

const Cities = [
  "Texas",
  "Atlanta",
  "Ohio",
  "Arizona",
  "Austin",
  "Cyrus",
  "New York",
  "Chicago",
  "San Francisco",
  "Saint Petersburg",
  "Seattle",
  "Portland",
  "Vancouver",
  "San Diego",
  "Seattle",
  "Sacramento",
  "San Juan",
];

const Names = [
  "Barney",
  "Sarah",
  "Loretta",
  "Michael",
  "Otto",
  "Alice",
  "John",
  "Cassy",
  "Martin",
  "Sophia",
  "Murphy",
  "Jessica",
  "Perez",
  "Samantha",
  "Rebecca",
];

const Earnings = [1458, 3000, 4000, 2500, 3200, 2800, 3500, 2200, 3900, 2700];

const getRandomElement = (arr: string[] | number[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const generateMessages = (cities: string[]) => {
  return cities.map((city) => {
    const name = getRandomElement(Names);
    const earning = getRandomElement(Earnings);
    return `
<b>${name}</b> from <b>${city}</b> just earned <b>$${earning}!</b>`;
  });
};

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(
    generateMessages(Cities)[0]
  );
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messages = generateMessages(Cities);

    const intervalId = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setMessageIndex((prevIndex: number) => {
          const newIndex = (prevIndex + 1) % messages.length;
          setCurrentMessage(messages[newIndex]); // Correctly updating the message
          return newIndex;
        });
        setVisible(true);
      }, 2000); // Assuming you meant 800ms for a fade effect
    }, 9000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cities, messageIndex]); // Dependency to recompute messages when Cities change

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    });
  }, []);

  return (
    <>
      <Hero />
      <Choose />
      <Services />
      <Testimonials />
      <NotificationModal message={currentMessage} visible={visible} />
      <Faq />
    </>
  );
};

export default Home;
