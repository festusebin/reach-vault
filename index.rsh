"reach 0.1";

const Shared = {
  seeChoice: Fun([Bool], Null),
  finalOutcome: Fun([Bool], Null),
  setTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...Shared,
    getPrice: Fun([], UInt),
    getAttendance: Fun([], Bool),
    setDeadline: Fun([], UInt),
    balanceAlice: Fun([Address], Null),
  });
  const B = Participant('Bob', {
    ...Shared,
    acceptTerms: Fun([], Bool),
    balanceBob: Fun([Bool], Null),
  });
  init();

  const setTimeout = () => {
    each([A, B], () => {
      interact.setTimeout();
    });
  };

  A.only(() => {
    const deadline = declassify(interact.setDeadline());
    const price = declassify(interact.getPrice());
  })
  A.publish(price, deadline);
  commit();
  A.pay(price);
  commit();

  B.only(() => {
    const terms = declassify(interact.acceptTerms());
  })
  B.publish(terms); 
  A.only(() => {
   interact.balanceAlice(A);
  })

  const countDown = lastConsensusTime() + deadline;

  var [here] = [false];
  invariant(balance() == balance());
  while ( countDown >= lastConsensusTime()) {
    commit();
    A.only(() => {
     const register = declassify(interact.getAttendance());
    });
    A.publish(register)
    .timeout(relativeTime(countDown), () => closeTo(B, setTimeout));
    commit();
    each([A, B], () => {
      interact.seeChoice(register);
    });
    B.publish();
    [here] = [register];
    continue;
  }
  if (lastConsensusTime() >= countDown && here){
    transfer(balance()).to(A)
    each([A, B], () => {
      interact.finalOutcome(true);

    });
    A.only(() => {
      interact.balanceAlice(A)
    });
    B.only(() => {
      interact.balanceBob(true)
    });

  }
  else{
    transfer(balance()).to(B)
    each([A, B], () => {
      interact.finalOutcome(false);
    
    
    });

    A.only(() => {
      interact.balanceAlice(A)
    });
    B.only(() => {
      interact.balanceBob(false)
    });
  }

  commit();
});