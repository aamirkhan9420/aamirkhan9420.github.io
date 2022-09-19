import emailjs from "emailjs-com"


export default function Email() {
    let senEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_w6c1so5", "template_q315u4u", e.target, "nChiaBWI9N7zeOxfg")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert("Email Successfuly Sended To Mr.Aamir Khan")
    }
    return ( <div className="form-container">
        <form action="" onSubmit={senEmail}>
           
                <label > Name</label>
                <input type="text" name="name" required/>
                <label >Email</label>
                <input type="text" name="user_email" required/>
                <label >Message</label>
                <textarea name="message" id="" cols="30" rows="4" required></textarea>
                <button className='btn primary-btn' type='submit'>
                    {" "}
                    Send{" "}
                 
                </button>
          
        </form>
  </div>


    );
}

