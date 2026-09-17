type NotificationDataType = {
  id: string;
  msg: React.ReactNode;
  time: string;
};

const NotificationComp = () => {
  const data: NotificationDataType[] = [
    {
      id: "1",
      msg: (
        <>
          Leave request from <b>Arjun Mehta</b> is pending
        </>
      ),
      time: "1hr ago",
    },
    {
      id: "2",
      msg: "1 task is overdue on Q3 Platform Revamp",
      time: "23 min ago",
    },
  ];

  return (
    <div>
      {data.length > 0
        ? data.map((item) => {
            return (
              <div key={item.id} className="p-3">
                <div className="text-xs">{item.msg}</div>
                <div className="mt-1 text-[10px] text-app-text-muted">
                  {item.time}
                </div>
              </div>
            );
          })
        : "No Data"}
    </div>
  );
};

export default NotificationComp;
