import AdvCourses from "@/components/AdvanceCourses";
import CoreCourses from "@/components/CoreCourses";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div>
      <Hero/>
        <Vision/>
        <CoreCourses/>
        <AdvCourses/>
    </div>
  );
}
