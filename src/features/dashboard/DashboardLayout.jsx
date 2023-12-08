/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import { Stats } from "./stats";
import { useCabins } from "./../cabins/useCabins";
import { SalesChart } from "./SalesChart";
import { DurationChart } from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export function DashboardLayout() {
  const { bookings, isLoading: bookingsIsLoading } = useRecentBookings();
  const {
    isLoading: staysIsLoading,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: cabinsIsLoading } = useCabins();
  if (bookingsIsLoading || staysIsLoading || cabinsIsLoading)
    return <Spinner />;

  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div> Today's activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <div>Chart stay durations</div>
      <div>Chart sales</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
