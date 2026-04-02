using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TrackServices.Infrastructure.Persistence;

public sealed class TrackServicesDbContextFactory : IDesignTimeDbContextFactory<TrackServicesDbContext>
{
    public TrackServicesDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<TrackServicesDbContext>();
        var connectionString = Environment.GetEnvironmentVariable("TRACKSERVICES_DB_CONNECTION")
            ?? "Server=(localdb)\\MSSQLLocalDB;Database=TrackServices;Trusted_Connection=True;TrustServerCertificate=True";

        optionsBuilder.UseSqlServer(connectionString, sqlServerOptions =>
        {
            sqlServerOptions.MigrationsAssembly(typeof(TrackServicesDbContext).Assembly.FullName);
            sqlServerOptions.EnableRetryOnFailure();
        });

        return new TrackServicesDbContext(optionsBuilder.Options);
    }
}