import { check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Collabration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex ">
        <div className="max-w-[25rem] ">
          <h2 className="mb-4 h2 md:mb-8">
            AI chat app for seemless colabration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li
                className="py-3 mb-3"
                key={item.id}
              >
                <div className="flex items-center">
                  <img
                    src={check}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="mt-3 ml-10 body-2 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
      </div>
    </Section>
  );
};

export default Collabration;
