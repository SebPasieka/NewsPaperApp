import moment from "moment"

class Date {
    ConvertDate(date) {
     return moment(date).format("dddd, MMM DD - HH:mm a")
    }
}
export default new Date();