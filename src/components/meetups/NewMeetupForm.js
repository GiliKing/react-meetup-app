import  { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const currentTitle = titleInputRef.current.value;
        const currentImage = imageInputRef.current.value;
        const currentAddress = addressInputRef.current.value;
        const currentDescription = descriptionInputRef.current.value;


        const meetupData = {
            title: currentTitle,
            image: currentImage,
            address: currentAddress,
            description: currentDescription,
        }

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" id="title" ref={titleInputRef} required />
            </div>

            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" id="image" ref={imageInputRef} required />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} required />
            </div>

            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" ref={descriptionInputRef} required rows="5"></textarea>
            </div>
            

            <div className={classes.actions}>
                <button>Add New Meetup</button>
            </div>
            
        </form>
    </Card>
}


export default NewMeetupForm;