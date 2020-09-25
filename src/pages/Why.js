import React from "react";
import "../components/styles/Why.scss";
import aug from "../assets/img/Aug.png";
import sep from "../assets/img/Sep.png";
import tasks from "../assets/img/tasks.png";
import sketch1 from "../assets/img/sketch1.jpg";
import sketch2 from "../assets/img/sketch2.jpg";
import proto from "../assets/img/GoogleFontTest1.gif";

function Why() {
  return (
    <main className="why__main">
      <div className="why__section">
        <h1 className="why__title">Why Prototype Design?</h1>
        <nav className="why__nav">
          <div className="nav__left">
            <ul>
              <li>
                <a href="#1.1">1.1 How did the project start?</a>
              </li>
              <li>
                <a href="#1.2">1.2 Why?</a>
              </li>
              <li>
                <a href="#1.3">1.3 How?</a>
              </li>
              <li>
                <a href="#1.4">1.4 What?</a>
              </li>
              <li>
                <a href="#1.5">1.5 Brief</a>
              </li>
              <li>
                <a href="#2.1">2.1 Planning</a>
              </li>
              <li>
                <a href="#2.2">2.2 MVP(s)</a>
              </li>
              <li>
                <a href="#2.3">2.3 Research and resources</a>
              </li>
              <li>
                <a href="#2.4">2.4 The architecture</a>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <ul>
              <li>
                <a href="#2.5">2.5 Testing out main functionalities</a>
              </li>

              <li>
                <a href="#2.6">2.6 Website design</a>
              </li>
              <li>
                <a href="#3.1">3.1 Preparing the environment</a>
              </li>
              <li>
                <a href="#3.2">3.2 Development journey</a>
              </li>
              <li>
                <a href="#3.3">4.1 Lessons learned</a>
              </li>
              <li>
                <a href="#3.4">4.2 Practices I will continue doing</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="why__tldr">
          <h2 className="why__header">TLDR</h2>
          <div className="why__textbox--left">
            S1 &#8594;{" "}
            <a className="why__textlink" href="#2.5">
              2.5 Testing out main functionalities
            </a>{" "}
            &{" "}
            <a className="why__textlink" href="#3.2">
              3.2 Development journey
            </a>
            <br />
            S2 &#8594;{" "}
            <a className="why__textlink" href="#2.1">
              2.1 Planning
            </a>{" "}
            &{" "}
            <a className="why__textlink" href="#2.3">
              2.3 Research and resources
            </a>
            <br />
            C1 &#8594;{" "}
            <a className="why__textlink" href="#2.1">
              2.2 to 2.5
            </a>
            <br />
            C6 &#8594;{" "}
            <a className="why__textlink" href="#3.1">
              3.1 to 3.4
            </a>
            <br />
            <a
              className="why__textlink"
              href="https://github.com/LPlox/prototype.design"
            >
              Github &#8599;{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header" id="1.1">
          1.1 How did the project start?
        </h2>
        <div className="why__textbox--left">
          The Front end development program at Hyper Island has been jam-packed
          with knowledge and learnings. During the 1.5 years, after diving into
          many topics, I realized there had been just as many subjects in Front
          End that were not taught. The last two months of the Individual
          project were an excellent opportunity to learn new aspects of web
          development and apply it to real life projects. Although there are
          many new areas to explore, I wanted to deep dive into one of the
          topics that I craved answers for. I've learned different coding
          methods and how to use code to solve real-life problems; therefore,
          instead of learning something from scratch, it was time to use
          everything I've learned to try and solve a personal problem.
        </div>
        <div className="why__textbox--right">
          The idea started when I was scrolling r/webdev forum on Reddit. Reddit
          is a forum, where people who have the same interest or knowledge could
          write and discuss topics within the forum's category. On the forum
          there would be topics and questions about coding. Occasionally, I
          would see questions that Front end developers would ask: "How do I get
          better at design?". "What is good web design?" and "How do I improve
          the design of my website?". I've had the same questions through all of
          the projects, but after more than one year of Front end studies, you
          get a feel for how the design development is applied on websites. The
          question is so broad, so how do we combat such a great question?
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="1.2">
          1.2 Why?
        </h2>
        <div className="why__textbox--left grid-2">
          So why? I have spent many hours looking at satisfying designs but
          always wondered how to design one from scratch. Web design is a wide
          spread subject; design can be found within many other disciplines,
          such as designers, UI/UX designers, and artists. Apart from the other
          fields, what is specific to web design? Is all design applicable in
          web design? During this project, I try to collect as many resources
          and information as possible to a platform where I can put the
          knowledge into an interactive tool.
        </div>

        <h2 className="why__header--right grid-1" id="1.3">
          1.3 How?
        </h2>
        <div className="why__textbox--right grid-2">
          The solution will be built on a single page application (with client
          side rendering) solution. The reason I chose React for the project
          are:
          <ul>
            <li>
              The data needs to be shared throughout all the pages. As the user
              selects a set of data, the data needs to be transferred and
              combined at the end of the selection.{" "}
            </li>
            <li>Display and Lazy load heavy amount of data for the future.</li>
            <li>
              The website needs to change data dynamically and smoothly,
              especially when users can edit fonts and colors. These are changed
              in CSS, which is easier to change dynamically with inline CSS.
            </li>
            <li>
              React can handle inline CSS and quickly serve it to DOM, where
              components can directly display the change after the state has
              been seen in virtual DOM. (Less of a lag, I presume)
            </li>
            <li>
              Routing in react would be simple to handle as the user may go back
              and forth between pages many times and the state wouldn't be lost.
            </li>
            <li>
              There are more jobs in React than any other framework as of now.
              It would benefit me when applying for a react front end job to
              show my react knowledge with this platform.
            </li>
          </ul>
        </div>

        <h2 className="why__header--left grid-3" id="1.4">
          1.4 What?
        </h2>
        <div className="why__textbox--left grid-4">
          The end goal of this solution should make it easier for web developers
          to tap into web design. During the individual project, there will be
          an MVP shown. The MVP starts{" "}
          <a
            className="why__textlink"
            href="https://prototypedesign.netlify.app/"
          >
            {" "}
            here &#8599;
          </a>
          . Please mind that this individual project's goal is to test out if
          the tool would fit the solution and easy for users to utilize. The
          focus lies on the functionality; therefore the text and designs are
          not final.
        </div>

        <h2 className="why__header--right grid-3" id="1.5">
          1.5 Brief
        </h2>
        <div className="why__textbox--right grid-4">
          The brief that I settled on: <br />
          <span className="why__quote">
            "How might I make the design aspect of web development faster and
            simpler to prototype and test"
          </span>
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left" id="2.1">
          2.1 Planning
        </h2>
        <div className="why__textbox--left grid-2">
          The work is divided into sections that usually last for a week or
          longer, depending on how I prioritize tasks at the end of each week (I
          get to be my sprint overlord, sorry product owner). The weekly goal
          and tasks are similar to sprints (scrum combined with a task kanban
          board), except I was the one that held myself accountable, so the
          product backlog had two options "not done" and "done".
          <br />
          <details>
            <summary>Show monthly calender</summary>
            <img className="why__img--left" src={aug} alt="August" />
            <img className="why__img--left" src={sep} alt="September" />
          </details>
          <br />
          The structure is similar to how the headlines are structured in this
          article. The planning and preparations are inspired by the Google
          Venture sprints (research, choosing a brief with HMW, Lightning demos,
          solution sketch, asking the Who/ What/ Where/ When/ Why/ How. . .?),
          as they provide a good structure and games on how to prototype and
          create new ideas from scratch.
          <br />
          <details>
            <summary>Solution sketch</summary>
            <img className="why__img--right" src={sketch1} alt="Sketch" />
            <img className="why__img--right" src={sketch2} alt="Sketch" />
          </details>
          <br />
        </div>
        <div className="why__textbox--right grid-2">
          The development process is taken from scrum. Working by yourself, I
          knew I needed to plan by weekly goals. For each week, I would write
          down all the smaller tasks, or more often, the ones I don't want to
          remember while I was working on something else.
          <br />
          <details>
            <summary>Show detailed tasks</summary>
            <img className="why__img--right" src={tasks} alt="September" />
          </details>
          <br />
          As I work, I will most likely know what the next tasks are, and when I
          forget, I have my lists of tasks that need to be done and the design
          to look at. I didn't put much time on writing down each component and
          create user stories as I, most of the time, knew what the components
          contained if it was added to the design. For each end of the week, I
          will prioritize if I can put more time to a weekly goal or if it isn't
          important to the MVP. Setting the two months in weekly goals made me
          want to finish them more than plan out how much time each task will
          take and be discouraged if I couldn't hold the deadlines.
          <br />
          <br />
          This is how I work and plan when I'm doing a solo project, as I know
          what will make me slow down or stay excited. But during a group
          project, the structure and detailed planning could make or break the
          group's success. That's why I wouldn't want to have this sort of
          planning style as it communicated deadlines and goals to vaguely. The
          reason it worked out is that I worked out the{" "}
          <a className="why__textlink" href="#2.5">
            {" "}
            hardest part (2.5 testing out the main functionality)
          </a>{" "}
          of the development first, to test and see if the solutions or
          functions would work within the components. I would search for the
          best solutions for what I wanted to create. Hence the development went
          smoothly when I started developing the React App.
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header grid-1" id="2.2">
          2.2 MVP(s)
        </h2>
        <div className="why__textbox--left grid-2">
          <span className="why__quote">MVP 1</span>: During the planning, I took
          a long time to make sense of the functionality and the usability of
          the solution. I went from an idea that was too broad, like Webflow, to
          something concrete and allowed for a more restricted playground.
          During this process, the HOW, WHAT, and WHY were my main questions to
          figure out. What kind of problem did I encounter during the
          development of other school projects? What did I need in that moment?
          How would I present this to new users in a non overwhelming way? These
          are the functionality I nailed down to focus on.
          <ul>
            <li>Font selection</li>
            <li>Color scheme selection</li>
            <li>Theme selection</li>
            <li>Saving the render </li>
          </ul>
        </div>
        <div className="why__textbox--right grid-2">
          <span className="why__quote">MVP 2</span>: As for the future there
          will be more specific functionalities around each step (font, color,
          text, content etc..). The main focus will be presenting and giving
          more information about the knowledge around design and why designing
          is so important, how you start etc. The greatest goal would be to find
          this site helpful in the sea of information on the web. Testing will
          be done periodically to make sure the solution is solving a problem.
          The next set of goals for the next MVP would be:
          <ul>
            <li>
              Be able to select each color instead of preset color schemes.
            </li>
            <li>
              Be able to select specific fonts instead of preset font sets
            </li>
            <li>Text editing on the designs</li>
            <li>
              Be able to read about where the data is collected from and
              resources on where you can learn and read more about special
              terms.
            </li>
            <li>
              Obtain resources and terms applicable to web design to learn more
              about the subject
            </li>
            <li>Explanation on good practices in design</li>
          </ul>
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="2.3">
          2.3 Research and resources
        </h2>
        <div className="why__textbox--left grid-2">
          Before starting with the project, I spent two weeks collecting
          resources and reading about development and design to avoid the need
          to correct any major mistakes during the process. Starting with
          development practices, I read about the standard resources to refresh
          the knowledge I have since past projects. I chose to work with react,
          react router, and sass with bem class naming methodology to start. As
          I have been developing a few react projects during the course, I did
          have sufficient knowledge from start to end. I focused on researching
          for this project to make my code as easy to understand as possible.
          Thinking about the future, if I wanted to add someone to the project,
          the methods for writing code should be homogenous. The general rules I
          followed are from these resources:
          <br />
          <a
            className="why__textlink"
            href="https://www.w3.org/wiki/JavaScript_best_practices"
          >
            Javascript best practices: w3.org &#8599;
          </a>
          <br />
          <a
            className="why__textlink"
            href="https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4"
          >
            Sass project structure: itnext.io &#8599;
          </a>
          <br />
          <a
            className="why__textlink"
            href="https://gomakethings.com/how-i-setup-my-vanilla-javascript-projects/"
          >
            Javascript project structures: gomakethings.com &#8599;
          </a>
          <br />
          <br />
          The reading list for design research was much longer. The first week
          of research was focused on researching on design terms and reading
          materials. The rest of the weeks was used to study the material. The
          general subjects that I needed to explore were "Rules of web design",
          "Genres and keywords", "Font combinations", "Color schemes", "Layout,
          grid systems, and negative space". To not show the whole list of
          websites that I've read and pdf books that I've downloaded, this is
          the list of resources that I used the most during the development
          process for the MVP.
        </div>
        <div className="why__textbox--right grid-2">
          Web design in general. (This is important to know who, why, and how to
          connect and communicate the message with your website).
          <br />
          <a
            className="why__textlink"
            href="https://shortiedesigns.com/blog/10-top-principles-effective-web-design/"
          >
            Top principles for effective web design: shortiedesigns.com &#8599;
          </a>
          <br />
          Font combo and how to go about it
          <br />
          <a
            className="why__textlink"
            href="https://design.tutsplus.com/articles/how-to-combine-fonts-how-not-to-and-best-font-combinations--cms-33904"
          >
            how to combine fonts: design.tutsplus.com &#8599;
          </a>
          <br />
          I've read the book "Grid Systems" but applying it to web design is too
          far fetched. Instead, finding resources of someone that has already
          figured it out was helpful.
          <br />
          <a
            className="why__textlink"
            href="https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/"
          >
            Building better ui designs layout grids: smashingmagazine.com
            &#8599;
          </a>
          <br />
          This resource is an overall good knowledge well, it bases on graphic
          design in the old way, but it explains it so you can apply it to your
          designs.
          <br />
          <a className="why__textlink" href="http://thinkingwithtype.com/">
            thinkingwithtype.com &#8599;
          </a>
          <br />
          Color theory is, by itself, a deep subject. There are theories behind
          to why some colors suit better with each other. Still I found that the
          colors are different from what standard color theory and color schemes
          work.
          <br />
          <a className="why__textlink" href="http://colormind.io/blog/">
            colormind.com &#8599;
          </a>
          <br />
          <a className="why__textlink" href="https://fontjoy.com/">
            fontjoy.com &#8599;
          </a>
          <br />
          The interesting part of the research was to find that web design is a
          very new topic, and there haven't been many books published on the
          "rules" and "the process" of web design. As I read the book "Grid
          systems", I realized how much of the design rules did not apply to web
          design. Reading about design grids for newspapers and design magazines
          are a good way to start, knowing where grids and the straight "don'ts"
          come from. In this case, a website that explains how a web designer
          found their methods of how to use grids are 90% more applicable to web
          design; The most important information I retrieved during the research
          is how I should start my web design, how font and color selection
          works, and how to put it all together to communicate, create a
          feeling, and design a website than design books and publication. This
          taught me to read and select what is relevant to web design, this is
          the main goal why I started this project, to sort out the most
          important information and terms for web developers to use.
          <br />
          <br />
          The most important information I retrieved during the research are how
          I should start my web design, how font and color selection works, and
          lastly how to put it all together to communicate, create a feeling,
          thus how to design a website.
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="2.4">
          2.4 The architecture
        </h2>
        <div className="why__textbox--left grid-2">
          As the main functionalities are written down, I had to decide how to
          build these functionalities into components. This is what the plan was
          before the development began:
          <ul>
            <li>
              Question list before the design view → What kind of website, font
              sets, color palette, keywords, domain name, form: input in what
              you're selling, etc.{" "}
            </li>
            <li>Website preview page</li>
            <blockquote>
              <li>Render of website</li>
              <blockquote>
                <li>Images from Unsplash api</li>
                <li>text api to fill text areas</li>
              </blockquote>
              <li>Mouse interactions on Hover</li>
              <li>Grid Lines (Can be seen in the render preview only)</li>
            </blockquote>
            <li>Settings page</li>
            <blockquote>
              <li>Font selection</li>
              <li>Color selection </li>
              <blockquote>
                <li>Color picker</li>
                <li>Color scheme picker</li>
                <li>Color api</li>
                <li>Color selection → Where the specific color should go</li>
              </blockquote>
              <li>Theme picker → Choose a design theme. </li>
            </blockquote>
            <li>Settings page 2 </li>
            <blockquote>
              <li>Input your text, pictures, logo, media.</li>
              <li>Render</li>
            </blockquote>
          </ul>
        </div>
        <div className="why__textbox--right grid-2">
          This is more or less what I felt the MVP was about:
          <ul>
            <li>Frontpage with information and more reading material</li>
            <li>Web theme selection</li>
            <li>Font selection</li>
            <li>Color scheme selection</li>
            <li>Render and download</li>
          </ul>
          These were the functionality that I wanted to test out. This shows how
          many functions I planned to develop. In the end, the focus of the
          brief and the scope of an MVP was something that saved me from
          developing half bad components and chose to develop usable components
          that show the solution properly.
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="2.5">
          2.4 Testing out the main functionality
        </h2>
        <div className="why__textbox--left grid-2">
          Trying to code the functionalities was the part of the project that
          could make or break the project. If I couldn't make the main
          functionality work in code, the project could have taken another turn.
          The process is written here as the 2.4 step. This doesn't mean that I
          took the tasks this late in the process; I did the testing here and
          there to minimize the project's risk to fail. As soon as I got the
          idea I tested each component in a minimal setup where the front end
          wasn't in focus. This made the project easier to process as I could
          see how to code each component. With trial and failures, scares, and
          at last relief, I finally got a version that had the functionality I
          was looking for.{" "}
        </div>
        <div className="why__textbox--right grid-2">
          Font selection — Let the user see each font rendered with text,. The
          selections are then used on the template text on the render. The
          hardest part was loading all the font dynamically so the page wouldn't
          have a lengthy load time. — used solutions and services: Google Fonts
          API + Web font loader + JSON file of font combinations that are
          recommended and generated by other sources.
          <br />
          <br />
          Color scheme — Let the user see color combos. The selected combo will
          be used to color a chosen design. — used solutions and services:
          Colormind. This service was fetched and then saved in a JSON database,
          as this page was not secure, and a mixed content error occurred. To
          solve this, with the secured https I deployed my site with. A static
          local database was a simple solution for the MVP.
          <br />
          <details>
            <summary>Show the early prototype</summary>
            <img className="why__img--left" src={proto} alt="Proto" />
          </details>
          <br />
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="2.6">
          2.6 Website design
        </h2>
        <div className="why__textbox--left grid-2">
          The design was the part that stressed me out the most. During the
          Individual project, we didn't have clients with their own design
          system, nor did I have a designer on my team to check my design and
          usability. It required that I had the project's motive clear enough
          that I could design a website to suit my problem. I knew the design is
          the first thing users will look at and decide if the problem I'm
          solving is worth reading or using for their web design.
        </div>
        <div className="why__textbox--right grid-2">
          The graphic elements will also tell the user what the website is
          about. So I went into the design with a goal: the design should tell
          what the website is about without having the user read it. Also,
          convince the design is good enough so they can trust the developer who
          created the website.
        </div>
        <div className="figma grid-3">
          <iframe
            title="Figma"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWLG4RodhzzPye3VFSGIy9y%2FIndividual-Project&chrome=DOCUMENTATION"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="3.1">
          3.1 Preparing the development
        </h2>
        <div className="why__textbox--left grid-2">
          The development process is straight forward. I followed some advice on
          how the project should be structured.
          <br />
          <a
            className="why__textlink"
            href="https://gomakethings.com/how-i-setup-my-vanilla-javascript-projects/"
          >
            Javascript project structures: gomakethings.com &#8599;
          </a>
          <br />
          I had a very emphasized goal of making the website fully responsive.
          Hence I put a lot of time and effort into building the sass files with
          the variables that I needed to be responsive.
          <br />
          <a
            className="why__textlink"
            href="https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4"
          >
            Sass project structure: itnext.io &#8599;
          </a>
          <br />
          A live version was deployed early on so the website could be tested on
          all of my devices at home.
          <br />
          <a className="why__textlink" href="https://www.netlify.com/">
            Netlify.com &#8599;
          </a>
          <br />
          And of github~
          <br />
          <a
            className="why__textlink"
            href="https://github.com/LPlox/prototype.design"
          >
            Github repo:github.com &#8599;
          </a>
          <br />
        </div>
        <h2 className="why__header--right grid-1" id="3.2">
          3.2 Development journey
        </h2>
        <div className="why__textbox--right grid-2">
          The tasks I had during the development were:
          <ul>
            <li>Build up the react and sass structure</li>
            <li>
              Create the first page with the sass mixins and variables, so there
              would only be one place to change if something isn't fitting.
            </li>
            <li>
              Create the two pages needed for the website because they all had
              the same design to design the two variants and then focus on the
              core functionality.
            </li>
            <li>
              Generate design on the front page: Here, I collect the resources I
              have researched and start to create enough data to generate fonts,
              colors, and web templates.
            </li>
            <li>
              Web designs page: Inserting HTML from a JSON was dangerous to do,
              as the components says: dangerouslySetInnerHTML. Instead, I
              created randomization of templet components where the HTML is set,
              but the fonts and the colors can be dynamically set with inline
              CSS.
            </li>
            <li>
              Font combo page: The most challenging part of this component was
              displaying all the fonts in each set. The page doesn't have that
              much lag, but it loads not as quickly as the data maps out to the
              components.
            </li>
            <li>
              Color change: This page took the longest as I learned what mixed
              content is and how it could attack users. The async functions were
              new to me in react, the state of an async function was solved, but
              the mixed content stopped me from working directly with the api.
            </li>
            <li>
              Restructure the architecture as the project grew and the
              components needed to fit better with each other. This was
              important as I felt I had more moments of patching rather than
              adding functionality.
            </li>
            <li>
              Testing: As the development went forward, I ensured the end
              product was tested on my family members and friends to see if the
              website would be understood without me explaining the concept to
              them.
            </li>
          </ul>
        </div>
      </div>
      <div className="why__section">
        <h2 className="why__header--left grid-1" id="3.3">
          3.3 Lessons learned
        </h2>
        <div className="why__textbox--left grid-2">
          <ul>
            <li>
              Planning more in depth for each component. it would have
              benefitted me in having a smoother development process. Not having
              to restructure the architecture and styling would save some time
              for further development.{" "}
            </li>
            <li>
              Testing all of the core concepts and techniques so the biggest
              difficulties would be solved from the start.
            </li>
            <li>
              Dealing with a bigger coding project, I still don't know id it's
              better to do every task that are similar to all the components, or
              to work component by component... But whatever you do, try not to
              combine them. Writing todos down as you go makes it easier to
              focus on the task at hand.{" "}
            </li>
            <li>
              During the development, think about how to explain the project or
              the take over to someone else. If the code or technical practices
              are too scattered or different, try to minimize the different
              methods. (Naming conventions etc)
            </li>
          </ul>
        </div>
        <h2 className="why__header--right grid-1" id="3.4">
          3.4 Practices I will continue doing
        </h2>
        <div className="why__textbox--right grid-2">
          <ul>
            <li>
              Test for all the devices after every significant change to layout
              or functionality push.{" "}
            </li>
            <li>
              Have the full environment prepared from the start. Having the
              platform to see the changes I've made, to be able to test the
              project live on any device, and to be able to see the uploads from
              the early stage to the MVP was really rewarding.{" "}
            </li>
            <li>
              Having people you can test your early to MVP prototype. It's good
              to have new people testing each time.{" "}
            </li>
          </ul>
        </div>
      </div>
      <section className="why__section">
        <h2 className="why__header">Thank you for reading!</h2>
      </section>
    </main>
  );
}

export default Why;
