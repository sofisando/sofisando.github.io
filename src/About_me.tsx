function About_me() {
  return (
    <div>
      <h1>Hola</h1>
      <svg>
        <mask id="blob1" className="mask-type-alpha fill-gray-700/70">
          <path d="..."></path>
        </mask>
        <image
          href="./assets/yo.png"
          height="100%"
          width="100%"
          mask="url(#blob1)"
        />
      </svg>
    </div>
  );
}
export default About_me;
