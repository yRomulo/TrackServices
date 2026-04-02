using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TrackServices.Infrastructure.Persistence;

namespace TrackServices.Infrastructure.DependencyInjection;

public static class InfrastructureServiceCollectionExtensions
{
    public static IServiceCollection AddTrackServicesPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        var provider = configuration["Persistence:Provider"]?.Trim();
        if (string.Equals(provider, "InMemory", StringComparison.OrdinalIgnoreCase))
        {
            var databaseName = configuration["Persistence:DatabaseName"]?.Trim();

            services.AddDbContext<TrackServicesDbContext>(options =>
            {
                options.UseInMemoryDatabase(string.IsNullOrWhiteSpace(databaseName) ? "TrackServices" : databaseName);
            });

            return services;
        }

        var connectionString = configuration.GetConnectionString("TrackServicesDb");
        if (string.IsNullOrWhiteSpace(connectionString))
        {
            return services;
        }

        services.AddDbContext<TrackServicesDbContext>(options =>
        {
            options.UseSqlServer(connectionString, sqlServerOptions =>
            {
                sqlServerOptions.MigrationsAssembly(typeof(TrackServicesDbContext).Assembly.FullName);
                sqlServerOptions.EnableRetryOnFailure();
            });
        });

        return services;
    }
}