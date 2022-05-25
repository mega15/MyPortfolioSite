import { Store } from 'react-notifications-component';

const insert ="top"
const container = "top-right"
const timeout = 5000
const animIn = ["animate__animated", "animate__fadeIn"]
const animOut = ["animate__animated", "animate__fadeOut"]
const dismisOpts =  {
    duration: timeout,
    onScreen: true,
    pauseOnHover: true
  }

export function warningNotification(title:string, message:string){
    Store.addNotification({
        title: title,
        message: message,
        type: "warning",
        insert: insert,
        container: container,
        animationIn: animIn,
        animationOut: animOut,
        dismiss: dismisOpts
      });
};

export function successNotification(title:string, message:string){
    Store.addNotification({
        title: title,
        message: message,
        type: "success",
        insert: insert,
        container: container,
        animationIn: animIn,
        animationOut: animOut,
        dismiss: dismisOpts
      });
};

export function errorNotification(title:string, message:string){
    Store.addNotification({
        title: title,
        message: message,
        type: "danger",
        insert: insert,
        container: container,
        animationIn: animIn,
        animationOut: animOut,
        dismiss: dismisOpts
      });
};