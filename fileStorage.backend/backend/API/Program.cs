using Domain.Repositories;
using Infrastructure.Database;
using Infrastructure.Interface;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<DbContext>();

builder.Services.AddControllers();
builder.Services.AddScoped<IAuth, AuthRepository>();
builder.Services.AddScoped<IDocument, DocumentRepository>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
/*if ( app.Environment.IsDevelopment() )
{*/
    app.UseSwagger();
    app.UseSwaggerUI();

/*}*/

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();
