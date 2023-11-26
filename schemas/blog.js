export default {
    name: "Blog",
    type: "document",
    title: "Blog Posts",
    fields: [{
        name: "title",
        type: "string",
        title: "Title"
    },
    {
        name: "content",
        type: "text",
        title: "Content"
    },
    {
        title: "Launch schedule",
        name: "lauchAt",
        type: "datetime",
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
          }
    },
    ]
}