import { Balance } from "../components/Balance"
import { Homebar } from "../components/front"
import { Users } from "../components/Users"

export const Home = () => {
    return <div>
        <Homebar />
        <div className="m-8">
            <Balance value={"1,000"} />
            <Users />
        </div>
    </div>
}