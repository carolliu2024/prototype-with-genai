## Experience with using GenAI for prototyping
Briefly describe what the code is supposed to do.
- The code is supposed to create a timer application that acts as a tool for managing rotations in a subswarm. On the screen is a timer that that counts down from an initial time that any subswarm member
can set. Members can also start/pause the timer, and see the order of whose turn is next in the rotation. A visual alert will appear when the timer is at the 2-minute mark. 

Does the code work? If not, what's broken?
- Yes, the code works.
How is the code better than what the team currently has?
- The code is more condensed than what my team currently has.

How is the code worse?
- The styling is quite good, but can be a little strange; sometimes I will need to zoom out of the page to see certain buttons, and when GPT fixes it, the fix is just increasing some length (in pixels) of those buttons. I would prefer that it tries to adapt a coding style such that the final page is suitable to different screen sizes.

How many tries did it take to get the code? Main struggles?
- It did not take many tries to get the code working. There was some friction at the beginning where the app would not run, but I think it was due to the React app naming their files with .js and not .jsx?
- It did not take me more than 2 tries to successfully achieve a (relatively simple) individual functionality or styling change.
- Main struggles were probably clarifying exactly what I wanted in terms of functionality

Overall impression of the experience
- I think GPT is good for relatively simple tasks, and our app is not too complicated itself. However, if I were to ask it to do something more complicated, or build off of someone else's code, I am not sure if I would have as smooth of an experience, unless it is trained on the entire codebase, which may not always be feasible.

## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE).
