import {FlexBoxExercise} from "@/app/projects/components/FlexBoxExercise";
import Link from "next/link";
import {graphicsLibraryRouter} from "@/lib/routes";
export const metadata = {
  title: 'Projects',
}
export default function page() {
  return (
    <div>
      <Link href={graphicsLibraryRouter.slug} target={'_blank'}>
        <FlexBoxExercise/>
      </Link>
    </div>
  )
}
