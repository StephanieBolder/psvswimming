import Axios from "axios"

export default class NotificationService {

    getAllNotifications() {
        return Axios.get('/notification');
    }
    
    postNotification(appIdInput, messageInput, titleInput, receiverIds, Type)
    {
        return Axios.post('/notification',{
            appId: appIdInput,
            message: messageInput,
            title: titleInput,
            userIds: receiverIds,
            notificationType: Type
            // receivedUserId: receivedUserIdInput
        });
    }

    getNotificationByUserId(userId){
        return Axios.get('/notification/user/' + userId);
    }

    getNotificationById(notificationId){
        return Axios.get('/notification/' + notificationId);
    }

    
}