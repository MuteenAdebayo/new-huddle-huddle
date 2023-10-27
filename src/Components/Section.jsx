import "../styles/Section.css";
import growtogether from "../images/illustration-grow-together.svg";
import flowconvo from "../images/illustration-flowing-conversation.svg";
import user from "../images/illustration-your-users.svg"
const Section = () => {
  return (
    <>
      <section>
         <div className=" row grow-section">
          <div className=" col-md-6 grow-only">
          
            <h4>Grow Together</h4>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversation you
              miss out with a feedback form
            </p>
          </div>

          <div className=" col-md-6 img">
            <img className="text-img" src={growtogether} alt="Grow together" />
          </div>
        </div> 

        <div className=" row another-img">
          <div className=" col-md-6 img">
            <img
              className="text-img"
              src={flowconvo}
              alt="flowing conversation"
            />
          </div>
          <div className=" col-md-6 flow-only ">
            <h4>Flowing Conversations</h4>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for more natural
              flow.
            </p>
          </div>
        </div>



        <div className=" row below-img">
          <div className=" col-md-6 user-only">
            <h4>Your Users</h4>
            <p>
              It takes no time at all integrate Huddle with your app's
              authentication solution. This means, once signed in your app, your
              users can start chatting immediately
            </p>
          </div>
          <div className="col-md-6 img">
            <img className="text-img" src={user} alt="your user" />
          </div>
        </div> 
      </section>
    </>
  );
};
export default Section;
