import React from "react";
import { Preview, PreviewHighlight, PreviewDisplay } from "components/Preview";
import { Highlight } from "components/Highlight";

const Button = props => {
  return (
    <article id="button" className="fr-article">
      <div className="fr-article-heading">
        <h2 className="fr-article-title">Buttons</h2>
        <h5 className="fr-article-subtitle">
          Mollit tempor Lorem veniam incididunt officia tempor.
        </h5>
      </div>
      <section id="overview" className="fr-article-section">
        <header className="heading">
          <h4 className="title">Overview</h4>
        </header>
        <p>
          Labore minim adipisicing eu amet culpa nostrud labore. Dolor veniam
          ullamco enim amet magna anim. Elit fugiat nulla aliqua deserunt culpa
          ipsum fugiat.
        </p>
        <div className="mg-top-large mg-bottom-large">
          <button className="button mg-right">Default Button</button>
          <button className="button button--primary mg-right">
            Primary Button
          </button>
          <button className="button button--clear">Clear Button</button>
        </div>
        <Highlight lang="html">
          {`<button class="button mg-right">Default Button</button>
            <button class="button button--primary">Primary Button</button>
            <button class="button button--clear">Clear Button</button>
          `}
        </Highlight>
      </section>
      <section id="themes" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Themes</h4>
        </div>
        <p>
          Fugiat est pariatur velit ipsum nisi dolor proident amet culpa duis
          fugiat ullamco dolore. Ipsum occaecat anim ipsum officia irure
          proident quis occaecat amet consequat.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="mg-bottom">
              <button className="button button--primary mg-right">Primary</button>
              <button className="button button--secondary mg-right">Secondary</button>
              <button className="button button--success mg-right">Success</button>
              <button className="button button--danger mg-right">Danger</button>
              <button className="button button--warning mg-right">Warning</button>
            </div>
            <div>
              <button className="button button--dark mg-right">Dark</button>
              <button className="button button--light">Light</button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button">Default</button>
              <button class="button button--primary">Primary</button>
              <button class="button button--secondary">Secondary</button>
              <button class="button button--success">Success</button>
              <button class="button button--danger">Danger</button>
              <button class="button button--warning">Warning</button>
              <button class="button button--dark">Dark</button>
              <button class="button button--light">Light</button>
              `}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="pill" className="fr-article-section">
        <div className="heading">
          <h5 className="title">Rounded</h5>
        </div>
        <p>Prepend <code>{`.button-pill`}</code> modifier class to transform your button component to a pill-like shape.</p>
        <Preview>
          <PreviewDisplay>
            <div>
              <button className="button button--pill mg-right">Rounded Button</button>
              <button className="button button--pill button--primary mg-right">Primary Button</button>
              <button className="button button--pill button--secondary mg-right">Rounded Button</button>
              <button className="button button--pill button--raised button--primary mg-right">Raised Button </button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button button--pill">Rounded Button</button>`}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="raised" className="fr-article-section">
        <div className="heading">
          <h5 className="title">Raised</h5>
        </div>
        <p>Aliquip et sunt occaecat nisi commodo velit quis culpa anim.</p>
        <Preview>
          <PreviewDisplay>
            <div className="mg-bottom">
              <button className="button button--primary button--raised mg-right">
                Primary
              </button>
              <button className="button button--secondary button--raised mg-right">
                Secondary
              </button>
              <button className="button button--success button--raised mg-right">
                Success
              </button>
              <button className="button button--danger button--raised mg-right">
                Danger
              </button>
              <button className="button button--warning button--raised mg-right">
                Warning
              </button>
            </div>
            <div>
              <button className="button button--dark button--raised mg-right">
                Dark
              </button>
              <button className="button button--light button--raised">
                Light
              </button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button button--raised">Button</button>
              <button class="button button--primary button--raised">Primary</button>
              <button class="button button--secondary button--raised">Secondary</button>
              <button class="button button--success button--raised">Success</button>
              <button class="button button--danger button--raised">Danger</button>
              <button class="button button--warning button--raised">Warning</button>
              <button class="button button--dark button--raised">Dark</button>
              <button class="button button--light button--raised">Light</button>
            `}
          </PreviewHighlight>
        </Preview>
      </section>  

      <div>
        <div className="heading">
          <h4 className="title">Sizes</h4>
        </div>
        <p>
          Need your button bigger, or rather smaller? Append{" "}
          <code>{`.button--#{size}`}</code> modifier class to customize the size
          of a button component as needed.
        </p>
        <p>
          We've prepared several predefined sizes that you can use right
          out-of-the-box:
          <ul>
            <li>
              <code>{`.button--x-small`}</code>
            </li>
            <li>
              <code>{`.button--small`}</code>
            </li>
            <li>
              <code>{`.button--large`}</code>
            </li>
            <li>
              <code>{`.button--x-large`}</code>
            </li>
          </ul>
        </p>
        <Preview>
          <PreviewDisplay>
            <button className="button button--x-small mg-right">
              Extra Small
            </button>
            <button className="button button--small mg-right">Small</button>
            <button className="button mg-right">Base</button>
            <button className="button button--large mg-right">Large</button>
            <button className="button button--x-large">Extra Large</button>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button button--x-small">Extra Small</button>
              <button class="button button--small">Small</button>
              <button class="button">Base</button>
              <button class="button button--large">Large</button> 
              <button class="button button--x-large">Extra Large</button>
            `}
          </PreviewHighlight>
        </Preview>
      </div>
    </article>
  );
};

Button.propTypes = {};

export default Button;