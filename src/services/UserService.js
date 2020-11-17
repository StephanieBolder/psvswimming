import Axios from "axios"

export default class UserService {

    getUserById(userId) {
        return Axios.get('/user/' + userId);
    }

    getCurrentUserRoleData() {
        return Axios.get('/user/roleData');
    }

    postUser(firstName, lastName, email, role, membershipNo) {
        return Axios.post('/user', {firstName: firstName, lastName: lastName, email: email, role: role, membershipNo: membershipNo})
    }
    
    getUsersByRole(roleType){
        return Axios.get('/user/role/' + roleType);
    }
}
