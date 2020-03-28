import Vue from 'vue'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import parseISO from 'date-fns/parseISO'
import format from "date-fns/format"

Vue.filter("FromNow", function(date) {
    if (!date) {
        return ""
    }
    return formatDistanceToNow(parseISO(date), { addSuffix: true })
})

Vue.filter("FormatDate", function(date, newformat) {
    if (!date) {
        return null
    }
    return format(parseISO(date), newformat)
}
)
