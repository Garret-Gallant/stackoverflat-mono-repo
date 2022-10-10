function AboutUs() {
  return (
    <div className="flex space-x-8 items-center justify-center pt-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-96">
        <img
          class="w-full h-52 object-cover"
          src="https://user-images.githubusercontent.com/81394542/190517017-f5472b70-29a8-4c3a-b7a0-3a439386e39a.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 bg-white">
          <h2 class="font-bold text-xl mb-2">Jenipher Belloso</h2>
          <p class="text-gray-700 text-base">
            Jenipher is full stack developer currently living in Denver with her
            partner and cat. She likes Pina Colada's and getting caught in the
            rain.
            <br />
            <a href="https://www.linkedin.com/in/jenipher-belloso/">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-96">
        <img
          class="w-full h-52 object-cover"
          src="https://user-images.githubusercontent.com/81394542/190526148-ff664fda-0b75-4a64-aa17-e6a26b55ea6d.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 bg-white">
          <h2 class="font-bold text-xl mb-2">Garret Gallant</h2>
          <p class="text-gray-700 text-base">
            Garret is a Full-Stack Developer from Denver, Colorado. Loves
            talking to strangers in real life, maybe not so much online...
            <br />
            <a href="https://www.linkedin.com/in/jared-mumaw-9395a6243/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-96">
        <img
          class="w-full h-56"
          src="https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg"
          alt="catholder"
        />
        <div class="px-6 py-4 bg-white">
          <h2 class="font-bold text-xl mb-2">Jared Mumaw</h2>
          <p class="text-gray-700 text-base">
            Jared is a Full-Stack Developer from Portland, Oregon.
            <br />
            <a href="https://www.linkedin.com/in/jared-mumaw-9395a6243/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
