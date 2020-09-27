<script>
export default {
    data() {
        return {
            visitor: {
                name: "",
                email: "",
                phone: "",
                message: "",
            },

            loading: false,
            showAlert: false,
        };
    },

    methods: {
        async sendMessage() {
            let visitor = this.visitor;

            if (visitor.name && visitor.email && visitor.message) {
                this.loading = true;

                let uuid = Math.floor(Math.random() * 10000);

                visitor.date = new Date().toLocaleString();

                await this.firebase
                    .database()
                    .ref(`message-${uuid}`)
                    .set(visitor);

                this.visitor = {};
                this.loading = false;
                this.showAlert = true;
            }
        },
    },
};
</script>

<template>
    <div>
        <hr />
        <h3>Send Me Message</h3>
        <hr />

        <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            v-if="showAlert"
        >
            I Recived Your Message Successfuly, and will get in touch with you
            ASAP.
            <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="showAlert = false"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="form-group">
            <label for="name">Name / Nickname</label>
            <input
                type="text"
                required
                name="name"
                :readonly="loading"
                id="name"
                v-model="visitor.name"
                class="form-control"
                placeholder="Enter Your Name"
            />
        </div>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input
                type="email"
                :readonly="loading"
                required
                name="email"
                id="email"
                v-model="visitor.email"
                class="form-control"
                placeholder="Enter Your Email Address"
            />
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
                type="text"
                :readonly="loading"
                name="phone"
                id="phone"
                v-model="visitor.phone"
                class="form-control"
                placeholder="Enter Your Phone Number"
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                v-model="visitor.message"
                placeholder="Enter Your Message"
                class="form-control"
                :readonly="loading"
                required
                rows="5"
            ></textarea>
        </div>

        <div class="form-group text-right">
            <button
                @click="sendMessage"
                :disabled="loading"
                class="btn btn-primary form-control"
                :class="[loading ? 'py-1' : '']"
            >
                <div
                    v-if="loading"
                    class="spinner-border text-light p-1"
                    role="status"
                >
                    <span class="sr-only">Loading...</span>
                </div>
                <span v-else>Send</span>
            </button>
        </div>

        <hr />
        <h3>Contact Me Directly</h3>
        <hr />

        <p>
            <a
                href="mailto:abdelhammied@gmail.com"
                class="ml-2 btn btn-primary btn-sm"
                target="_blank"
            >
                <i class="fa fa-envelope"></i>
            </a>

            <a href="tel:+201006994920" class="ml-2 btn btn-primary btn-sm">
                <i class="fa fa-phone"></i>
            </a>

            <a
                class="ml-2 btn btn-primary btn-sm"
                target="_blank"
                href="https://www.facebook.com/Abdelhammied1/"
            >
                <i class="fa fa-facebook-f"></i>
            </a>

            <a
                class="ml-2 btn btn-primary btn-sm"
                href="https://www.linkedin.com/in/abdelhamed-elsayed-980159126/"
            >
                <i class="fa fa-linkedin"></i>
            </a>
        </p>
    </div>
</template>