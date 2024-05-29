const openSignin = document.getElementById('open');

const signInDialog = document.getElementById('dialog__sign-in');
const signUpDialog = document.getElementById('dialog__sign-up');
const forgotPassDialog = document.getElementById('dialog__forgot-pass');

const closeBtnSignIn = document.getElementsByClassName('popup__close')[0];   
const closeBtnSignUp = document.getElementsByClassName('popup__close')[1];   
const closeBtnForgotPass = document.getElementsByClassName('popup__close')[2];   


const signupSwitchSignin = document.getElementsByClassName('switch__signin')[0];   

const signinSwitchSignup = document.getElementsByClassName('switch__signup')[0];   
const signinSwitchForgotpass = document.getElementsByClassName('switch__forgot-pass')[0];   




openSignin.addEventListener('click', () => signInDialog.showModal());
closeBtnSignIn.addEventListener('click', () => signInDialog.close());
closeBtnSignUp.addEventListener('click', () => signUpDialog.close());
closeBtnForgotPass.addEventListener('click', () => forgotPassDialog.close());
signupSwitchSignin.addEventListener('click', () => {
    signUpDialog.close();
    signInDialog.showModal();
})
signinSwitchSignup.addEventListener('click', () => {
    signInDialog.close();
    signUpDialog.showModal();
})
signinSwitchForgotpass.addEventListener('click', () => {
    signInDialog.close();
    forgotPassDialog.showModal();
})


//NOT UNDERSTAND, BUG
//Causing auto close dialog sign in when clicking btnSubmit sign in
//signInDialog.addEventListener(
//  	'click',
//    ((event) => {
//      let rect = event.target.getBoundingClientRect();
//      
//      console.log(
//                  `
//                  ClientX: ${event.clientX}
//                  rect.left: ${rect.left}
//                  rect.right: ${rect.right}
//
//                  ClientY: ${event.clientY}
//                  rect.top: ${rect.left}
//                  rect.bottom: ${rect.bottom}
//                  `
//                 );
//    	if (rect.left > event.clientX ||
//          rect.right < event.clientX ||
//          rect.top > event.clientY ||
//          rect.bottom < event.clientY
//      ) {
//          signInDialog.close();
//      }
//    })
//  );

export {
    signInDialog,
}
