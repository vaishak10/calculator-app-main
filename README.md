# Calculator app solution

## Table of contents

- [Overview](#overview)
    A simple Calculator which performs basic mathematical operations (addition, subtraction , multication, division).
    
    One additional feature added to this is to get square root of a number and also get square root of a number in 
    mathematical expressions.

    DEL button in this calculator is just to erase the previous values .To clear the entire expression it's preffered to 
    click on the RESET button.

    The Keypad is operated by click events , so the user has to click on the buttons on keypad to use the functions of this Calculator. Keyboard events not yet supported.

  - [Screenshots](#screenshots)
    
    ![desktop version1](https://github.com/vaishak10/calculator-app-main/blob/master/DevelopedCalcSnaps/theme1_desktopVersion.JPG)

    For screenshots refer the *** DevelopedCalcSnaps *** folder.

  - [Links](#links)
     
    Get acces to the calculator using the link : https://vaishak10.github.io/calculator-app-main/

    Solve those expressions and open for any suggestions or features to be added.

- [My process](#my-process)

    In the process of making this calculator ,I have made sure the code is not repeated in the javascript file for setting styles for each of the theme's.

    For the Calculations part, Made sure the string expression has been evaluated using  window.Function() instead of eval(). Read in some documentations that eval() has some security issues. For more detailed information about this, read the mdn documentation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

  - [Built with](#built-with)

    UI is built on a responsive using HTML , CSS styles and CSS grids, DOM.
    Controllers carrying out logical operations have been developed using vanilla javascript.

  - [What I learned](#what-i-learned)

    Building this Calculator was all about learning many concepts I was never familiar about and all also implementing some of the features I had come across in past few months.

    The best part about developing this was writing more efficient and modular pieces of code ,and another one being the need to create responsive applications.

    From DOM manipulations ,To writing functions whhich can be re-used n number of times . From making use of CSS grids for reponsive interface to changing themes on the basis of a click and much more. A good learning experience.
    
  - [Continued development](#continued-development)

    I do want to add more features in this Calculator, make it bit like a scientific calculator with features to make complex mathematical operations.

    Currently this calculator works on click event i.e., we need to click on the buttons on the keypad using mouse . Want to make sure that along with this feature ,can add keyboard events such that user can operate the keypad from the comfort of the user's keyboard.

  - [Useful resources](#useful-resources)
    
    The resources are never ending, but i have listed some of the most used resources during the course of developing this calculator.
     
    1. https://developer.mozilla.org/en-US/docs/Web/JavaScript ---> Most of the Javascript doubts and insights were from this documentation.
    2. https://www.w3schools.com/cssref/default.asp  ---> Best sites for clearing all doubts with respect to CSS, 
     
    For more detailed explanations on CSS properties refer ,
    3. https://developer.mozilla.org/en-US/docs/Web/css

    Whenever i was stuck with a approach , found more insights and shortcuts from , 
    4. https://stackoverflow.com/questions

- [Author](#author)
   
   Vaishak.K 

   GitHub: https://github.com/vaishak10
   Twitter: https://twitter.com/noob_devv

- [Acknowledgments](#acknowledgments)
   
   This Calculator is a part of challenge by https://www.frontendmentor.io/challenges .They provide alot of challenges 
   (from developing simple templates to developing dynamic web applications) which enchances a individuals project developing skills ,which is a must as one needs to build more and more projects to be a good Developer.
