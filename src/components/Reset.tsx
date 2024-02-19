import Reset_module from './Reset.module.scss';

type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div className={Reset_module.center}>
            <h1>You Scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button onClick={props.onPress} className={Reset_module.rbutton}>
                Press To Try Again!
            </button>
        </div>
    );
}
// export default Reset;
// import React from 'react';
// import emailjs from 'emailjs-com';
// import Reset_module from './Reset.module.scss';

// type Props = {
//     totalQuestions: number;
//     correctQuestions: number;
//     onPress: () => void;
// };

// function Reset(props: Props) {
//     // Define a function to send the email
//     function sendEmail(e) {
//         e.preventDefault(); // Prevent the page from reloading
//         // Send the email using emailjs
//         emailjs
//             .sendForm(
//                 'YOUR_SERVICE_ID', // Replace with your service ID
//                 'YOUR_TEMPLATE_ID', // Replace with your template ID
//                 e.target, // The form element
//                 //'YOUR_USER_ID' // Replace with your user ID
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text); // You can also show a success message to the user
//                 },
//                 (error) => {
//                     console.log(error.text); // You can also show an error message to the user
//                 }
//             );
//     }

//     return (
//         <div>
//             <h1>You Scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
//             <form onSubmit={sendEmail}>
//     <input type="hidden" name="totalQuestions" value={props.totalQuestions} />
//     <input type="hidden" name="correctQuestions" value={props.correctQuestions} />
//     <input type="hidden" name="score" value={(props.correctQuestions / props.totalQuestions) * 100} />
//     <input type="hidden" name="to_email" value="razaldazalfazal@gmail.com" />
//     <input type="hidden" name="to_name" value="Razal Dazal Fazal" />
//     <button type="submit" className={Reset_module.rbutton}>
//         Send Results
//     </button>
// </form>

//             {/* <button onClick={props.onPress} className={Reset_module.rbutton}>
//                 Press To Try Again!
//             </button> */}
//         </div>
//     );
// }
export default Reset;
