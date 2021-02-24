<template>
    <div class="form-container">
        <section>
            <div v-show="messageSent == 2" class="alert alert-3-danger">
                <h3 class="alert-title">Ops, Message not Sent!</h3>
                <p class="alert-content">Sorry, Somthing happened on the server side. I will fix this later.</p>
            </div>
            <div v-show="messageSent == 1" class="alert alert-2-success">
                <h3 class="alert-title">Message Sent</h3>
                <p class="alert-content">The information you entered was sent to me successfully, I will check it later.</p>
            </div>
        </section>
        <form @submit="sendEmail">
            <input
                type="text"
                v-model="name"
                name="name"
                placeholder="Enter Your Name"
                autocomplete="off"
                required
            />
            <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Enter Your Email Address"
                autocomplete="off"
                required
            />
            <textarea
                name="message"
                v-model="message"
                rows="8"
                placeholder="Enter Your Message"
                autocomplete="off"
                required
            >
            </textarea>
            <input type="submit" :value="send ? 'Sending Your Message...' : 'Send'" />
        </form>
    </div>
</template>
<script>
import emailjs, { init } from "emailjs-com";
init("user_zdO7SqNAzUeW1bl8KtMhn");
export default {
    name: "ContactUs",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            messageSent: 0,
            send: false
        };
    },
    methods: {
        sendEmail(e) {
            this.send = true;
            try {
                emailjs
                    .send("service_88wvqn9", "template_xatr43k", {
                        from_name: this.name,
                        to_name: "Kate Awisan",
                        email: this.email,
                        message: this.message,
                    })
                    .then(() => {
                        this.messageSent = 1;
                        this.send = false
                        this.name = ""
                        this.email = ""
                        this.message = ""
                    })
                    .catch(() => {
                        this.messageSent = 2;
                        this.send = false
                    });
            } catch (e) {
                console.log(e);
            }

            e.preventDefault();
        },
    },
};
</script>
<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 450px;
    width: 100vw;
}

input,
textarea {
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #aaa;
    outline: none;
    margin: 0 10px;
}

input[type="Submit"] {
    cursor: pointer;
    border-radius: 20px;
    border: none;
    padding: 15px 40px;
    background: #353535;
    color: #eee;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: 0.3s;
    border: 2px solid #fff;
    max-width: 120px;

    &:active {
        background: var(--highlight);
    }
}

.alert {
  width: 512px;
  padding: 16px;
  margin: 8px;
}

.alert-1-primary {
  background-color: rgba(77, 77, 255, 0.05);
}
.alert-1-primary .alert-title {
  color: #4d4dff;
}

.alert-1-warning {
  background-color: rgba(255, 186, 0, 0.05);
}
.alert-1-warning .alert-title {
  color: #ffba00;
}

.alert-2-success {
  border-left: 4px solid #2ec946;
  background-color: rgba(46, 201, 70, 0.05);
}
.alert-2-success .alert-title {
  color: #2ec946;
}

.alert-2-secondary {
  border-left: 4px solid #666666;
  background-color: rgba(102, 102, 102, 0.05);
}
.alert-2-secondary .alert-title {
  color: #666666;
}

.alert-3-primary {
  border: 1px solid #cdcdff;
  border-radius: 8px;
  background-color: rgba(77, 77, 255, 0.05);
}
.alert-3-primary .alert-title {
  color: #4d4dff;
}

.alert-3-danger {
  border: 1px solid #ffb8b8;
  border-radius: 8px;
  background-color: rgba(255, 56, 56, 0.05);
}
.alert-3-danger .alert-title {
  color: #ff3838;
}

.alert-title {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
}

.alert-content {
  margin: 0;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  color: #555555;
}
</style>