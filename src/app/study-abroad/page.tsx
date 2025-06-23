import Navigation from "~/app/_components/study-abroad/navigation";
import OnlineMockTest from "../_components/online-mock-test/OnlineMockTest";
import TrendingInsightsPage from "../_components/study-abroad/blogs";
import TrendingCoursesPage from "../_components/study-abroad/top-courses-globe";
export default function studyabroad() {
    return (
        <><Navigation />
        <TrendingCoursesPage/>
        <TrendingInsightsPage/>
        </>
    )

}