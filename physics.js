const getAcceleration = (o) => {
    if (o.f && o.m) {
        return o.f / o.m
    }
    if (o.Δv && o.Δt) {
        return o.Δv / o.Δt
    }
    if (o.d && o.t) {
        return 2 * o.d/ o.t**2
    }
    return 'impossible'
}