using Lib.Net.Http.WebPush;
using System;
using System.Threading.Tasks;
using System.Threading;

namespace ExamplePWA.Store
{
    public interface IPushSubscriptionStore
    {
        Task<int> StoreSubscriptionAsync(PushSubscription subscription);

        Task DiscardSubscriptionAsync(string endpoint);

        Task ForEachSubscriptionAsync(Action<PushSubscription> action);

        Task ForEachSubscriptionAsync(Action<PushSubscription> action, CancellationToken cancellationToken);
    }
}