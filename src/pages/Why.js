import React from "react";
import "../components/styles/Why.scss";

function Why() {
  return (
    <main className="why__main">
      <section className="why__section">
        <h1 className="why__title">Why Prototype Design?</h1>
        <h2 className="why__header">1.1 How did the project come to start?</h2>
        <p className="why__textbox--left">
          The front end program has been full packed with knowledge and
          learning. The journey has been rough and during the 1.5 year there has
          been many topics that we've dived into, and many subjects that has
          been mentioned but not been taught. The front end program has been
          full packed with knowledge and learning. The Individual project was a
          great opportunity to learn new aspects of web development and how it
          can be applied in real life. I have learned different methods of
          coding and how to use the code to solve real life problems, so instead
          of learning something from scratch I decided use everything I've
          learnt to try and solve a personal problem. How do you design a
          website
        </p>
        <p className="why__textbox--right">
          The idea started when I was scrolling r/webdev forum on reddit. There
          I saw posts about how to go about designing a website for someone who
          is a developer and not a designer. Seeing the replies saying front end
          isn't just about how to code and push a website, you also need to have
          some design skills and know how to best express a brand or a solution.
          Design for someone who hasn't isn't trained designer or have some art
          related knowledge is very hard to understand, the more you read into
          it the more you see what you don't know. I wanted a solution to just
          that. Have a platform where the information about design could be
          combined with the practices you could use during the development. Or
          at least try to make a simple version for the individual project.
        </p>
      </section>
      <section className="why__section">
        <h2 className="why__header--left grid-1">1.2 Why?</h2>
        <p className="why__textbox--left grid-2">
          So why? Web design is a big and spread out subject, design is
          something you can find within the other disciplines, such as
          designers, UX and artists, but where does the line go when it comes to
          web design? Is all design applicable in web design? During this
          project I try to collect as many resources and information as I can to
          a platform where I can put the knowledge into a interactive tool.{" "}
        </p>

        <h2 className="why__header--left grid-3">1.3 How?</h2>
        <p className="why__textbox--left grid-4">
          The process will consist of a single page application (mainly front
          end based) solution. The reason I chose React for the project are:
          <ul>
            <li>
              The data needs to be shared throughout all the pages, as the user
              selects a selection of data the data needs to be transferred to
              all the pages.
            </li>
            <li>Display and Lazy load heavy amount of data.</li>
            <li>
              The website needed to change dynamically, especially when users
              can edit fonts and colors.
            </li>
            <li>
              React can handle inline sass, where components can display the
              change quickly after the state has changed.
            </li>
            <li>
              Routing in react would be simple to handle as the user may go back
              and fourth between pages many times and the state wouldn't be
              lost.
            </li>
            <li>
              The popularity among the Front end development shows there are
              more jobs in react, it would benefit me when applying for a react
              front end job if I can show my react knowledge with this platform.
            </li>
          </ul>
        </p>

        <h2 className="why__header--right grid-1">1.4 What?</h2>
        <p className="why__textbox--right grid-2">
          The end solution would make it easier for web developer to tap into
          web design. At least this would be the end goal, during the individual
          project there will be a MVP shown.
        </p>
      </section>
      <section className="why__section">
        <h2 className="why__header grid-1">2.1 Planning the MVP</h2>
        <p className="why__textbox--left grid-2">
          MVP 1: This is what I've accomplished during the module
          <ul>
            <li>Font selection</li>
            <li>Color scheme selection</li>
            <li>Theme selection</li>
            <li>Saving the render </li>
          </ul>
        </p>
        <p className="why__textbox--right grid-2">
          MVP 2: As for the future there will be more functionalities. Testing
          will be done on users and there also may be functionalities removed if
          the solution has to big of a scope or the functions are too scattered.
          <ul>
            <li>Be able to select each color </li>
            <li>Be able to select specific fonts </li>
            <li>Text editing on the designs</li>
            <li>
              Be able to read about where the data is collected from and
              resources on where you can learn and read more about special
              terms.{" "}
            </li>
          </ul>
        </p>
      </section>
      <section className="why__section">
        <h2 className="why__header grid-1">Preparing the environment</h2>
      </section>
    </main>
  );
}

export default Why;
