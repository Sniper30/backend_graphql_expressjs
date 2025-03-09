import mongoose from "mongoose";
import { userLogin } from "../schemas/user.schema.js";
import { genSalt, hash } from "bcrypt";
export const User = mongoose.model('user', userLogin);
export const seriviceUsers = {
    saveUser: async (_user) => {
        const user = new User();
        const { password, ...rest } = _user;
        const _hash = await hash(password, await genSalt(10));
        user.email = rest.email;
        user.password = _hash;
        user.phone = rest.phone;
        user.name = rest.name;
        return await user.save();
    },
    findUsers: async () => await User.find()
};
//# sourceMappingURL=user.model.js.map