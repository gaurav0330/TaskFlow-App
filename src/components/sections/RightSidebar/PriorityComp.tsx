
const PriorityComp = () => {
  return (
    <div className="p-3">
            <h3 className="text-xs text-app-text-muted font-semibold mb-1">Priority</h3>
            <div className="flex flex-col gap-1 items-start">
                <div><input type="checkbox" value={'high'}/> High</div>
                <div><input type="checkbox" value={'medium'}/> Medium </div>
                <div><input type="checkbox"  value={'low'} /> Low </div>

            </div>
    </div>
  )
};
export default PriorityComp;