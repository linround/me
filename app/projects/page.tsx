import Link from "next/link";
import {calendarDemo, graphicsLibraryRouter} from "@/lib/routes";
import {CalendarDemo} from "@/app/projects/components/CalendarDemo";
import {FlexBoxExercise} from "@/app/projects/components/FlexBoxExercise";
export const metadata = {
  title: 'Projects',
}
export default function page() {
  return (
    <div>
      <Link href={calendarDemo.slug} target={'_blank'}>
        <CalendarDemo />
      </Link>
      <Link href={graphicsLibraryRouter.slug} target={'_blank'}>
        <FlexBoxExercise/>
      </Link>

    </div>
  )
}
