import {CalendarDemo} from "@/app/projects/components/CalendarDemo";
import {FlexBoxExercise} from "@/app/projects/components/FlexBoxExercise";
export const metadata = {
  title: 'Projects',
}
export default function page() {
  return (
    <div>

      <CalendarDemo />
      <FlexBoxExercise/>

    </div>
  )
}
